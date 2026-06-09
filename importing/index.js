// const greet = require('./greet');
import greet from "./greet.js";

// importing multiple values form people
import { p1, p2, p3 } from "./peoples.js";
// here we have to give .js extension

greet("Bhaskar");




greet(p1);
greet(p2);
greet(p3);
// console.log(__filename);
// not defined in es6
// this is common js specific
