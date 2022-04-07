import React from "react";

type TecnologiesType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    country: string
}

type AddressType = {
    street: string
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TecnologiesType>
}

export const student: StudentType = {
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

console.log(student.name)
console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)