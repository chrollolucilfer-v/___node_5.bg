const {person1, person2, person3} = require('./people');

const greet = require('../exporting module/greet');

greet(person1);
greet(person2);
greet(person3);