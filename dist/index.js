const main = () => {
var currentProject;
var currentDatabase = database;

//generates the selected list onto the right panel
const updateDisplay = (project) => {
    currentProject = project;

    //update right panel
    let rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = '';
    project.displayList(rightPanel);

    //update left panel
    let projectsListSection = document.querySelector('.projects-area');
    projectsListSection.innerHTML = '';

    currentDatabase.populateProjects(projectsListSection);
}

const eventListeners = () => {
        //constants
        const listOfProjects = document.querySelectorAll('.project');
        const addButton = document.querySelector('.add-todo');
        const choiceButtons = document.querySelectorAll('.choice-button');
        const cancelButton = document.querySelector('.cancel-button');
        const choiceForm = document.querySelector('.choice-form');
        const addForm = document.querySelector('.add-form');
        const submitButton = document.querySelector('.submit-button');

        //choice of false indicates an add task action
        var choice = false;

        listOfProjects.forEach((project) => project.addEventListener('click', e => {
        let clickedName = e.target.innerHTML;
        let project = currentDatabase.retrieveProject(clickedName);
        updateDisplay(project);
        }))
    
        addButton.addEventListener('click', () => {
            choiceForm.style.display = "block";
            addButton.style.display = 'none';
        })
    
        choiceButtons.forEach((button) => {
            button.addEventListener('click', e => {
                if (e.target.id === 'project-button') {
                    choice = true;
                } else if (e.target.id === 'task-button') {
                    choice = false;
                }

                choiceForm.style.display = 'none';
                addForm.style.display = "block";

                
            })

            
        })
    
        cancelButton.addEventListener('click', () => {
            addForm.style.display = "none";
            addButton.style.display = 'block';
        })
    
        
        submitButton.addEventListener('click', () => {
            let input = document.getElementById('todo-title').value;
            creatorFunction(input, choice);
            input.value = '';
        })

        
}

const creatorFunction = (name, choice) => {
    if (choice === false) {
        currentProject.addTask(name);
        updateDisplay(currentProject);
    } else if (choice === true) {
        currentDatabase.createProject(name);
        updateDisplay(currentProject);
    }

    console.log('creator function ran');
}

//initial display population
updateDisplay(currentDatabase.projectList[0]);

//update event listeners
eventListeners();

}

main();











