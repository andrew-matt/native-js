import {UserType} from "./10_01";
import {Simulate} from "react-dom/test-utils";

function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u
    }

    copy.hair = copy.hair / power

    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Johnny',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = hairdresser(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)

})