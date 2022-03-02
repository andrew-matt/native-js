import React from 'react';

type UserType = {
    [key: string]: { id: number, name: string }
}

let users: UserType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '34589': {id: 34589, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina'
    expect(users['1']['name']).toBe('Ekaterina');
})


test('1', () => {
    users['1'].name = 'Ekaterina'
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})