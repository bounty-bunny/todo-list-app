document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (input.value.trim() === '') return;

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${input.value}
            <button class="btn btn-success btn-sm ml-2 mark-btn">Mark as Completed</button>
            <button class="btn btn-danger btn-sm ml-2 delete-btn">Delete</button>
        `;
        
        todoList.appendChild(li);
        input.value = '';

        li.querySelector('.mark-btn').addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', function() {
            todoList.removeChild(li);
        });
    });
});
