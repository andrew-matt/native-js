import {StudentType} from "../02/02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (a: StudentType, b: string) => {
    a.technologies.push(
        {
            id: new Date().getTime(),
            title: b
        }
    )
}