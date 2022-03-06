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
