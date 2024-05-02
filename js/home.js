const form = document.querySelector('form');
const ul = document.getElementById('taskList');


form.addEventListener('submit', e => {
    e.preventDefault();
    const modal = document.getElementById('myModal');
    const taskInput = form.querySelector('#taskInput');
    const dateInput = form.querySelector('#dateTimeInput');

    modal.style.display = "none";

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