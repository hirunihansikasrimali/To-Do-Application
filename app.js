// const task= document.getElementById("task");
// const addTaskbtn= document.getElementById("addTaskbtn");
// const taskContainer = document.getElementById("tasks-container");

// addTaskbtn.addEventListener("click", () =>{
//     const todoWrapper = document.createElement("div");
//     const deleteButton = document.createElement("button");
//     const taskText = document.createElement("p");
//     todoWrapper.classList.add("todo-container");
//     deleteButton.classList.add("delete-button");
//     taskText.classList.add("task-text");
//     taskText.textContent = task.value;
//     todoWrapper.append(taskText);
//     todoWrapper.append(deleteButton);
//     taskContainer.append(todoWrapper);
// })


const task = document.getElementById("task");
const addTaskbtn = document.getElementById("addTaskbtn");
const taskContainer = document.getElementById("taskContainer");

addTaskbtn.addEventListener("click", () => {

    if (task.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const todoWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");
    const taskText = document.createElement("p");

    todoWrapper.classList.add("todo-container");
    deleteButton.classList.add("delete-button");
    taskText.classList.add("task-text");

    taskText.textContent = task.value;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        todoWrapper.remove();
    });

    todoWrapper.append(taskText);
    todoWrapper.append(deleteButton);

    taskContainer.append(todoWrapper);

    task.value = "";
});
