import React from "react";
import {CityType} from "../02/02_02";
import {createGreetMessage, createListOfStreets, createlistOfStrHouses} from "./05";

export let city: CityType;

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

test("list of street titles of government buildings", () => {
    const listOfStreets = createListOfStreets(city.governmentBuildings);
    expect(listOfStreets.length).toBe(2);
    expect(listOfStreets[0]).toBe("Central Str");
    expect(listOfStreets[1]).toBe("South Str");
})

test("list of street titles of houses", () => {
    const listOfStrHouses = createlistOfStrHouses(city.houses)
    expect(listOfStrHouses.length).toBe(3);
    expect(listOfStrHouses[0]).toBe("White Street");
    expect(listOfStrHouses[1]).toBe("Happy Street");
    expect(listOfStrHouses[2]).toBe("Happy Street");
})

test("should greet citizens on the streets", () => {
    let messages = createGreetMessage(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White Street!");
    expect(messages[1]).toBe("Hello guys from Happy Street!");
    expect(messages[2]).toBe("Hello guys from Happy Street!");
})
