// script.js

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Lütfen bir görev girin.");
        return;
    }

    const todoList = document.getElementById("todo-list");

    // Yeni bir liste öğesi oluştur
    const listItem = document.createElement("li");

    // Görev metnini ekle
    const taskText = document.createElement("span");
    taskText.textContent = todoText;
    taskText.onclick = function () {
        listItem.classList.toggle("completed");
    };
    
    listItem.appendChild(taskText);

    // Silme butonunu ekle
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function () {
        todoList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);

    // Listeye yeni öğeyi ekle
    todoList.appendChild(listItem);

    // Input alanını temizle
    todoInput.value = "";
}
