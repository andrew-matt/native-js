import {getHaircut, moveUser, UserType, UserWithLaptopType} from "./10_01";

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