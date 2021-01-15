let today = ["Something I need to do", "Something else I need to do", "One more", "Seriously last thing"];
let activePage = "Today";

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

displayList(today);