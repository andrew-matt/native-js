import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";
import exp from "constants";

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

export const toFireStaff = function (x: GovernmentBuildingsType, y: number) {
    x.staffCount -= y;
}

export const toHireStaff = function (q: GovernmentBuildingsType, w: number) {
    q.staffCount += w;
}

export const greetingMessage = function (props: CityType) {
    /*return "Hello " + props.title + " City! I want all of your " + props.citizensNumber + " citizens to be happy!";*/
    return `Hello ${props.title} City! I want all of your ${props.citizensNumber} citizens to be happy!`;
}