var todoForm = document.querySelector('#newTodoForm');
var todoList = document.querySelector('#todoList');

//从本地加载
var savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (var i = 0; i < savedTodos.length; i++) {
    var newTodo = document.createElement('li');
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted;
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
}


//添加元素
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var newTodo = document.createElement('li');
    var taskValue = document.querySelector('#task').value;
    newTodo.innerHTML = taskValue;
    newTodo.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newTodo);

    savedTodos.push({ task: taskValue, isCompleted: newTodo.isCompleted });
    localStorage.setItem('todos', JSON.stringify(savedTodos));
});

//点击li
todoList.addEventListener('click', function(event) {
    var clickedListItem = event.target;

    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
    } else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
    }
    //更新缓存
    for (var i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].task == clickedListItem.innerHTML) {
            savedTodos[i].isCompleted = clickedListItem.isCompleted;
            localStorage.setItem('todos', JSON.stringify(savedTodos));
        }
    }
});