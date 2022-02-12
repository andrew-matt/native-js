import {createGreetingMessage, studentsPropsType} from "./05";

let students: Array<studentsPropsType>;

beforeEach(() => {
    students = [
        {name: "Ivan Petrov", age: 35},
        {name: "Anna Smirnova", age: 29},
        {name: "Vlad Shevchuk", age: 41},
    ]
})

test("students should become developers", () => {
    const developers = students.map(student => ({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: student.name.split(" ")[0],
        lastName: student.name.split(" ")[1]
    }));

    expect(developers[1].firstName).toBe("Anna");
    expect(developers[2].stack[4]).toBe("react");
})

test("should greet students", () => {
    const greetingMessage = createGreetingMessage(students);
    expect(greetingMessage.length).toBe(3);
    expect(greetingMessage[1]).toBe(`Hello Anna! Welcome to it-incubator!`)
})