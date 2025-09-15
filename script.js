let input = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');

addButton.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form refresh
    let task = input.value.trim();  
    if (task) {
        let listItem = document.createElement('li');
        listItem.textContent = task;    

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn'); // apply your CSS class

        // Delete functionality
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        // Append button to li
        listItem.appendChild(deleteBtn);

        // Add li to ul
        todoList.appendChild(listItem);

        input.value = '';  
    }
});
