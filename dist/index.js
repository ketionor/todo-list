//generates the selected list onto the right panel
const updateDisplay = (project) => {

    //update right panel
    let rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = '';

    project.displayList(rightPanel);

    //update left panel
    let projectsListSection = document.querySelector('.projects-area');
    projectsListSection.innerHTML = '';

    database.populateProjects(projectsListSection);
}

updateDisplay(database.projectList[0]);

//for some reason this function triggers twice
const listOfProjects = document.querySelectorAll('.project');
listOfProjects.forEach(() => addEventListener('click', e => {
    let clickedName = e.target.innerHTML;
    let project = database.retrieveProject(clickedName);
    updateDisplay(project);
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



