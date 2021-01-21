
class ProjectDatabase {
    constructor(userName) {
        this.name = userName;
        this.projectList = [];
    }

    createProject(projectName) {
        let project = new Project(projectName);
        this.projectList.push(project);
    }

    populateProjects(parentElement) {
        this.projectList.forEach(project => {
            let projectName = Object.entries(project)[0][1];
            let p = document.createElement('p');
            p.innerHTML = projectName;
            p.classList = 'project';
            parentElement.appendChild(p);
        })
    }

    retrieveProject(projectName) {
        let returnedProject;
        this.projectList.forEach(project => {
            if (project.name === projectName) {
                returnedProject =  project;
            }
        })
        return returnedProject;
    }
}

class Project {
    constructor(projectName) {
        this.name = projectName;
        this.list = [];
        this.status = false;
    }

    addTask(task) {
        this.list.push(new Task(task));
    }

    displayList(parentElement) {
        let header = document.createElement('h2');
        header.innerHTML = this.name;
        parentElement.appendChild(header);

        //creates individual task items
        this.list.forEach(item => {
            let span = document.createElement('span');
            parentElement.appendChild(span);
            let input = document.createElement('input');
            input.type = 'checkbox';
            parentElement.lastChild.appendChild(input);
            let label = document.createElement('label');
            label.innerHTML = Object.entries(item)[0][1];
            parentElement.lastChild.appendChild(label);
        })
    }
}

class Task {
    constructor(name) {
        this.name = name;
        this.status = false;
    }
}