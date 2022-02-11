import {StudentType} from "../02/02";
import {addSkill} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Andrew",
        age: 28,
        isActive: true,
        address: {
            street: "Surganova 2",
            city: {
                title: "Minsk",
                country: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "JS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})