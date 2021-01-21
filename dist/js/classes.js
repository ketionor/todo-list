class ProjectDatabase {
    constructor(userName) {
        this.name = userName;
        this.projectList = [];
    }
}

class Project {
    constructor(projectDatabase, projectName) {
        this.name = projectName;
        this.list = [];
        this.status = false;
        projectDatabase.projectList.push(projectName);
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