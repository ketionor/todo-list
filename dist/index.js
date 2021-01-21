//generates the selected list onto the right panel
const updateDisplay = (project) => {

    //update right panel
    let rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = '';

    project.displayList(rightPanel);

    //update left panel
    let projectsListSection = document.querySelector('.projects');
    projectsListSection.innerHTML = '';

    database.projectList.forEach(item => {
       let p = document.createElement('p');
       p.innerHTML = item;
       projectsListSection.appendChild(p);
    })
}

//for some reason this function triggers twice, console.log remains in here as a reminder of 
//what exactly the error is
const projects = document.querySelectorAll('.project');

projects.forEach(() => addEventListener('click', e => {
    let clickedName = e.target.innerHTML;
    let array = Object.entries(gtd);
    array.forEach(element => {
        if(element[1].title == clickedName) {
            displayList(element[1]);
        }
    })
}))

const addTodoButton = document.querySelector('.add-todo');
addTodoButton.addEventListener('click', () => {
    let form = document.querySelector('.add-form');
    form.style.display = "block";
})

const cancelButton = document.querySelector('.cancel-button');
cancelButton.addEventListener('click', () => {
    let form = document.querySelector('.add-form');
    form.style.display = "none";
})

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    let input = document.getElementById('todo-title').value;
    let currentProject = document.querySelector('h2').id;
    console.log(gtd[currentProject], input);
    todoFactory(gtd[currentProject], input);
    displayList(gtd[currentProject]);
    
})


updateDisplay(project1);