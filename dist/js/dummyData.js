var database = new ProjectDatabase('dummy user');

var project1 = new Project(database, 'buy a lambo');
project1.addTask('get rich');
project1.addTask('die trying'); 

var project2 = new Project(database, 'grocery list');
project2.addTask('eggs');
project2.addTask('milk');
project2.addTask('bread');
project2.addTask('chicken');
