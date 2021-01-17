//generates the selected list onto the right panel
const displayList = (project) => {
    let todoList = [];
    project.list.forEach(element => {
        todoList.push(element.name);
    })
    let rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = '';
    let title = document.createElement('h2');
    title.innerHTML = project.title;
    rightPanel.appendChild(title);

    for (i=0; i<project.list.length; i++) {
    
        let span = document.createElement('span');
        rightPanel.appendChild(span);
    
        let input = document.createElement('input');
        input.type = 'checkbox';
        rightPanel.lastChild.appendChild(input);
        let label = document.createElement('label');
        label.innerHTML = todoList[i];
        rightPanel.lastChild.appendChild(label);
    }
}

//Projects, factory function
const projectFactory = (name) => {
    projectName: name;
    function addToProjectList(name) {
        projectList.push(name);
    }
    addToProjectList(name);
    populateProjects(projectList);
    return {name};
}

const todoFactory = (project, name) => {
    let todo = {
        name: name,
        status: false
    }
    gtd[project].list.push(todo);
}

//Populate left panel with all projects
const populateProjects = (projectsList) => {
    let stepOne = Object.entries(projectsList);
    let projectsListSection = document.querySelector('.projects');
    projectsListSection.innerHTML = '';
    stepOne.forEach(project => {
        let p = document.createElement('p');
        p.innerHTML = project[1].title;
        p.classList = 'project';
        projectsListSection.appendChild(p);
    });
}

populateProjects(gtd);
displayList(gtd.project1);

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






