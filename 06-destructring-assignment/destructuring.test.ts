import React from "react";
import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Andrew",
        age: 28,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test("1", () => {

    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(28);
    expect(lessons.length).toBe(2);
    expect(title).toBe("Nezavisimosti street")
})

test("2", () => {

})