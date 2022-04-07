export type UserType = {
    name: string
    hair: number
    address: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type CompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = {
    companies: CompanyType[]
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
            city: newAddress
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLaptop
        }
    }
}

export function moveUserToAnotherHouse(u: UserWithLaptopType & UserWithBooksType, newHouse: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: newHouse
        }
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookToRemove)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: CompanyType) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}
