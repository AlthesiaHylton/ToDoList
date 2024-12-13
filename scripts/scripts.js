document.getElementById("add-todo").addEventListener("click", addTask);
document.getElementById("todo-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// function to add a task to the list
function addTask() {
    // getting the input value
    const todoInput = document.getElementById("todo-input").value;

    // alerting on empty input
    if (todoInput.trim() === "") {
        alert("Please enter an item to add to the list.");
        return;
    }

    // creating a new list item
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // creating a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    // create a text span for the task text
    const text = document.createElement("span");
    text.textContent = todoInput;

    // attaching a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // adding event listener to toggle strikethrough
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
    });

    // adding checkbox, text, and button to the list item
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    // appending the list item to the todo list
    document.getElementById("todo-list").appendChild(li);

    // clearing the input value after adding the task
    document.getElementById("todo-input").value = "";
}
