const form = document.querySelector('form');
const ul = document.getElementById('taskList');

form.addEventListener('submit', e => {
    e.preventDefault();
    const taskInput = form.querySelector('#taskInput');
    const dateInput = form.querySelector('#dateTimeInput');

    const html = `<li>
       <span>${taskInput.value}</span>
       <span>${dateTimeInput.value}</span>
       <button onclick=(removeLi(this)) class="deleteBtn"><i class='bx bxs-trash'></i></button>
    </li>`
    ul.innerHTML += html
});

function removeLi(e){
    e.parentElement.remove()
}