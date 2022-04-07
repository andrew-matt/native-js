export type UserType = {
    name: string
    hair: number
    address: {title: string}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function getHaircut(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, newAddress: string) {
    return {
        ...u,
        address: {
            title: newAddress
        }
    }
}
