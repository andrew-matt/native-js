import React from "react";

function increaseAge (u: UserType) {
    u.age++;
}

type AddressType = {
    title: string
}

type UserType = {
    name: string
    age: number
    address: AddressType
}

test('reference type text', () => {
    const user = {
        name: 'Andrew',
        age: 28,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(29)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {
    const users = [
        {name: 'Andrew', age: 28},
        {name: 'Andrew', age: 28},
    ]

    const admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount

    adminsCount++

    expect(adminsCount).toBe(101)
})

test('4', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addr
    }


    user2.address.title = 'Kanary'

    user.address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City')

    const users = [user, user2, {name: 'Misha', age: 4, address: addr}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(user.name).toBe('Dmitry')
})

test('sort test', () => {
    const letters = ['c', 'd', 'a', 'e', 'z']

    passportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'e', 'z'])

    function passportist (letters: any) {
      [...letters].sort();
    }
})
