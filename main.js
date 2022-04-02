
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

function createRow(){
    //@param: null
    //@return: null
    let newRow = HTMLtaskMokup.replace(/@/g, tasksID);
    listaTaskEL.innerHTML = listaTaskEL.innerHTML + newRow;    
}

function addTaskToRow(task){
    //@param task: string
    //@return: null
    //add user input to HTML mokup as a string
    let targetRow = document.querySelector(`#task-${tasksID}`);
    targetRow.textContent = task;
}

function aggiungiTask() {
    createRow();
    let task = taskInput.value;

    addTaskToRow(task);

    tasksID++
    taskInput.value = '';
    EnableDisable(taskInput, bottone);
}

function eliminaTask(questo) {
    //@param: <HTML>
    //@return: null
    /*deletes a specified child element from the listaTaskEL parent*/
    
    let ID = questo.id;
    let rowDaEliminare = document.querySelector(`#row-${ID}`);

    listaTaskEL.removeChild(rowDaEliminare);
}

function eliminaTutti() {
    //@param: null
    //@return: null
    //deletes evry child in listaTaskEL
    listaTaskEL.innerHTML = '';
    tasksID = 0;
}

function EnableDisable(InputHTML, btnToDisable) {
    //@param InputHTML: <HTML>
    //@param btnToDisable: <HTML>
    //return: null
    //Enables Post button when input field is not empty

    if (InputHTML.value.trim() != "") {
        btnToDisable.disabled = false;
    } else {
        btnToDisable.disabled = true;
    }
}

taskInput.addEventListener('keyup', () => {
    EnableDisable(taskInput, bottone);
});
