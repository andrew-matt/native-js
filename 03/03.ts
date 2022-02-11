import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

const x = function (a: number, b: number) {
    return a + b;
}

function y (a: number, b: number) {
    return a + b;
}

const z = (a: number, b: number) => {
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

export function makeInactive (h: StudentType, j: boolean) {
    h.isActive = j;
}

export const addSkill3 = function (a: StudentType, b: string) {
    a.technologies.push(
        {
            id: new Date().getTime(),
            title: b
        }
    )
}

export function doesStLiveInMinsk (q: StudentType, w: string) {
    return q.address.city.title === w;
}

export const addMoneyToBudget = (a: GovernmentBuildingsType, b: number) => {
   a.budget += b;
}

export function repirHouse(a: HousesType) {
    a.repaired = true;
}