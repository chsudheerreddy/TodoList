document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const dateElement = document.getElementById('date');

    // Set current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString(undefined, options);

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', () => {
            li.classList.add('slide-up');
            setTimeout(() => {
                li.remove();
            }, 300);
        });

        li.appendChild(deleteButton);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
    }
});
