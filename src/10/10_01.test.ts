import {
    addCompany,
    getHaircut,
    moveUser,
    moveUserToAnotherHouse,
    removeBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
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

test('remove js book', () => {
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

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})


test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        },
        companies: [{id: 1, title: 'EPAM'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const newUser = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)
    expect(user.companies).not.toBe(newUser.companies)
    expect(user.companies.length).toBe(2)
    expect(newUser.companies.length).toBe(3)
    expect(newUser.companies[2].title).toBe('Google')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        },
        companies: [{id: 1, title: 'EпAM'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company 2', () => {
    let user: UserWithLaptopType = {
        name: 'Johnny',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS',
        },
    }

    let companies = {
        'Dimych': [{id: 1, title: 'EпAM'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }

    const companyCopy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM')

    expect(companyCopy['Dimych']).not.toBe(companies['Dimych'])
    expect(companyCopy['Artem']).toBe(companies['Artem'])
    expect(companyCopy['Dimych'][0].title).toBe('EPAM')
})