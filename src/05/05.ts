import React from "react";
import {GovernmentBuildingsType, HousesType} from "../02/02_02";
import { city } from "./05_05.test";

export type studentsPropsType = {
    name: string
    age: number
}

const students: Array<studentsPropsType> = [
    {name: "Ivan Petrov", age: 35},
    {name: "Anna Smirnova", age: 29},
    {name: "Vlad Shevchuk", age: 41},
]

const transform = (student: studentsPropsType) => {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: student.name.split(" ")[0],
        lastName: student.name.split(" ")[1]
    }
}

export const createGreetingMessage = (a: Array<studentsPropsType>) => {
    return students.map(a => `Hello ${a.name.split(" ")[0]}! Welcome to it-incubator!`);
}

export const createListOfStreets = (a: Array<GovernmentBuildingsType>) => {
    return city.governmentBuildings.map(a => a.address.street.title);
}

export const createlistOfStrHouses = (houses: Array<HousesType>) => {
    return city.houses.map(a => a.address.street.title);
}

export function createGreetMessage(houses: Array<HousesType>) {
    return city.houses.map( a => `Hello guys from ${a.address.street.title}!`)
}