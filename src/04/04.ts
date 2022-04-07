import {CityType, GovernmentBuildingsType} from "../02/02_02";
import exp from "constants";

export const ages = [12, 40, 27, 35, 60, 100, 14, 1, 90, 91]

export const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150},
]

export type CoursesPropsType = {
    title: string
    price: number
}

export const demolishHousesOnTheStreet = (props: CityType, data: string) => {
    props.houses = props.houses.filter(a => a.address.street.title !== data)
}

export function getBuildingsWithStaffCountGreaterThan(city: Array<GovernmentBuildingsType>, number: number) {
    return city.filter(b => !(b.staffCount < number));
}