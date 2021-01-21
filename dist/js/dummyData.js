var database = new ProjectDatabase('dummy user');

console.log(database.projectList);

database.createProject('project1');
database.projectList.forEach(project => {
    if(project.name === 'project1') {
        project.addTask('get rich');
        project.addTask('die tryin');
    }
})

database.createProject('project2');
database.projectList.forEach(project => {
    if(project.name === 'project2') {
        project.addTask('eggs');
        project.addTask('milk');
        project.addTask('bread');
        project.addTask('chicken');
    }
})

console.log(database.projectList);