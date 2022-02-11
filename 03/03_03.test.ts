import React from "react";
import {CityType} from "../02/02_02";
import {addMoneyToBudget, repirHouse} from "./03";
import exp from "constants";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White Street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
            {
                buildedAt: 2020,
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