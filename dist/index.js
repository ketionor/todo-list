let today = ["Something I need to do", "Something else I need to do", "One more", "Seriously last thing"];
let projectList = ["Project one"]
let activePage = "Today";


//generates the selected list onto the right panel
const displayList = (array) => {
    for (i=0; i<array.length; i++) {
        let rightPanel = document.querySelector('.right-panel');
        let span = document.createElement('span');
        rightPanel.appendChild(span);
        rightPanel.lastChild.appendChild
    
        let input = document.createElement('input');
        input.type = 'checkbox';
        rightPanel.lastChild.appendChild(input);
        let label = document.createElement('label');
        label.innerHTML = array[i];
        rightPanel.lastChild.appendChild(label);
    }
}

const projectFactory = (name) => {
    projectName: name;
    function addToProjectList(name) {
        projectList.push(name);
    }
    addToProjectList(name);
    return {name};
}

const fooBar = projectFactory('fooBar');
fooBar.list = ["One","Two","Three"]
console.log(fooBar.list);

