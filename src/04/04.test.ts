import {ages, courses, CoursesPropsType} from "./04";
import exp from "constants";

test("choose old ones", () => {
    expect(ages.filter(props => props > 90)).toStrictEqual([100, 91]);
})

test("choose cheap courses", () => {
    expect(courses.filter(props => props.price < 160)[1].title).toBe("React");
})

type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

let tasks: Array<TasksPropsType>;

beforeEach(() => {
    tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "honey", isDone: true},
        {id: 4, title: "sugar", isDone: true},
        {id: 5, title: "salt", isDone: false}
    ]
})

test("get completed tasks", () => {
    const completedTasks = tasks.filter(props => props.isDone);
    expect(completedTasks.length).toBe(3);
    expect(completedTasks[0].title).toBe("milk");
})

test("get uncompleted tasks", () => {
    const completedTasks = tasks.filter(props => !props.isDone);
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[1].title).toBe("salt");
})