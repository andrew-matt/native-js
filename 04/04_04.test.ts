import React from "react";
import {CityType} from "../02/02_02";
import {addMoneyToBudget, greetingMessage, repirHouse, toFireStaff, toHireStaff} from "../03/03";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan} from "./04";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White Street"
                    }
                }
            },
            {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy Street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test("should change HOSPITAL budget", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test("should change FIRE-STATION budget", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test("house 1 should be repaired", () => {
    repirHouse(city.houses[1])
    expect(city.houses[1].repaired).toBe(true);
})

test("house 2 should be repaired", () => {
    repirHouse(city.houses[2])
    expect(city.houses[2].repaired).toBeTruthy();
})

test("should fire staff", () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

test("should hire staff", () => {
    toHireStaff(city.governmentBuildings[1], 50);
    expect(city.governmentBuildings[1].staffCount).toBe(1050);
    toFireStaff(city.governmentBuildings[1], 100);
    expect(city.governmentBuildings[1].staffCount).toBe(950);
})

test("greeting message should be correct", () => {
    const message = greetingMessage(city);
    expect(message).toBe("Hello New York City! I want all of your 1000000 citizens to be happy!");
})

test("houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy Street");
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].address.street.title).toBe("White Street");
})

test("buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThan(city.governmentBuildings, 500);
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE STATION");
})