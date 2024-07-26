import Task from "./task"

test("Task creating", ()=>{
    let task = new Task("Task name");
    expect(task.name).toBe("Task name");
})

test("Task equality", ()=>{
    let task1 = new Task("Task name");
    let task2 = new Task("Task name");
    expect(Task.isEqual(task1, task2)).toBe(true);
})