import {getHaircut, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Johnny',
        hair: 32,
        address: {
            title: 'Minsk'
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
            title: 'Minsk'
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Moscow')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Johnny',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.laptop.title).toBe('Macbook')
})