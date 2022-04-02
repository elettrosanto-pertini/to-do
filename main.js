//ELIMINARE TUTTO
//A)prendere innerHTML dell'<ul>
//B)resettare valore della lista

const HTMLtaskMokup = `
    <tr id="row-@" class="row">
        <td id="task-@"></td>
        <td><button id="@" onclick="eliminaTask(this)" class="button delete">&times;</button></td>
    </tr>
`;

let tasksID = 0;
let taskInput = document.querySelector('#taskInput');
let listaTaskEL = document.querySelector('#listaTask');
let bottone = document.getElementById('submit-btn');


function aggiungiTask() {
    let task = taskInput.value;
    let newRow = HTMLtaskMokup.replace(/@/g, tasksID);

    listaTaskEL.innerHTML = listaTaskEL.innerHTML + newRow;

    let newTask = document.querySelector(`#task-${tasksID}`);
    newTask.textContent = task;

    tasksID++
    taskInput.value = '';
    EnableDisable(taskInput, bottone);
}

function eliminaTask(questo) {
    let ID = questo.id;
    let rowDaEliminare = document.querySelector(`#row-${ID}`);

    listaTaskEL.removeChild(rowDaEliminare);
}

function eliminaTutti() {
    listaTaskEL.innerHTML = '';
    tasksID = 0;
}

function EnableDisable(InputHTML, btnToDisable) {

    if (InputHTML.value.trim() != "") {
        btnToDisable.disabled = false;
    } else {
        btnToDisable.disabled = true;
    }
}

taskInput.addEventListener('keyup', () => {
    EnableDisable(taskInput, bottone);
});