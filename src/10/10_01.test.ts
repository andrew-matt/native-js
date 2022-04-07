import {
    addNewBooksToUser,
    getHaircut,
    moveUser,
    moveUserToAnotherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = getHaircut(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Moscow')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ASUS')
})

test('move user to another house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToAnotherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})