const gtd = {
    project1: {
        title: "Proeject One",
        status: false,
        list: [
            {
                name: "Do something",
                status: false
            },
            {
                name: "Do something else",
                status: false
            }
        ] 
    },

    project2: {
        title: "Project Two",
        status: false,
        list: [
            {
                name: "Do something amazing",
                status: false
            },
            {
                name: "Milk",
                status: false
            }
        ] 
    },
};


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
    let projectsListSection = document.querySelector('.projects');
    projectsListSection.innerHTML = '';
    projectsList.forEach(project => {
        let p = document.createElement('p');
        p.innerHTML = project;
        p.classList = 'project';
        projectsListSection.appendChild(p);
    });
}

populateProjects(Object.keys(gtd));
displayList(gtd.project1);

//for some reason this function triggers twice, console.log remains in here as a reminder of 
//what exactly the error is
const projects = document.querySelectorAll('.project');
projects.forEach(() => addEventListener('click', e => {
    let clickedName = e.target.innerHTML;
    if (gtd.hasOwnProperty(clickedName)) {
        project = gtd[clickedName];
        console.log(project);
        displayList(project);
    }
}))






