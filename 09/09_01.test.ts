import React from "react";

function increaseAge (u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('reference type text', () => {
    var user = {
        name: 'Andrew',
        age: 28
    }

    increaseAge(user)

    expect(user.age).toBe(29)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {
    var users = [
        {name: 'Andrew', age: 28},
        {name: 'Andrew', age: 28},
    ]

    var admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})
