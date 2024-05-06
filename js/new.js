const form = document.querySelector('form');
const ul = document.getElementById('taskList');
let taskCount = 0; // Initialize the task counter

// Function to update the task counter
function updateTaskCount() {
    const taskCountElement = document.getElementById('taskCount');
    taskCountElement.textContent = taskCount;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const modal = document.getElementById('myModal');
    const taskInput = form.querySelector('#taskInput');
    const dateTimeInput = form.querySelector('#dateTimeInput');

    modal.classList.add('close-modal'); 

    const html = `<li>
       <span>${taskInput.value}</span>
       <span>${dateTimeInput.value}</span>
       <button onclick="removeLi(this)" class="deleteBtn"><i class='bx bxs-trash'></i></button> </li>`;
       
    ul.innerHTML += html;

    taskCount++; // Increment task count
    updateTaskCount(); // Update task count display

    // Reset the form after submission to clear input fields
    form.reset();

    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('close-modal'); // Remove the fadeout class for subsequent modals
    }, 1000);
});

function removeLi(e) {
    e.parentElement.remove();
    taskCount--; // Decrement task count
    updateTaskCount(); // Update task count display
}
