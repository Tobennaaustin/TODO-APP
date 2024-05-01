const taskInput = document.getElementById('taskInput');
const dateTimeInput = document.getElementById('dateTimeInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDateTime = dateTimeInput.value;

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span>${taskDateTime}</span>
            <button class="deleteBtn"><i class='bx bxs-trash'></i></button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        dateTimeInput.value = '';

        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', deleteTask);
        deleteBtn.style
    }
}

function deleteTask(event) {
    const li = event.target.parentElement;
    console.log(li); // Check if the correct parent element is selected
    console.log(taskList); // Check the taskList element
    taskList.removeChild(li);
}
