const task= document.getElementById("task");
const addTaskbtn= document.getElementById("addTaskbtn");
const taskContainer = document.getElementById("tasks-container");

addTaskbtn.addEventListener("click", () =>{
    const todoWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");
    const taskText = document.createElement("p");
    todoWrapper.classList.add("todo-container");
    deleteButton.classList.add("delete-button");
    taskText.classList.add("task-text");
    todoWrapper.append(taskText);
})