import path from "path";

// console.log(first)
// using path module

console.log(path.basename("e:/Node Js/pathmodule/index.js")); // returns the last portion of the path
// output: - index.js
// 'c:\\coursed\\nodejspathmodule'

console.log(path.basename("e:/Node Js/pathmodule/index.js", ".js"));
// this removes extesnion .js

console.log(path.dirname("e:/Node Js/pathmodule/index.js"));
// gives us the directory / folder names

console.log(path.extname("e:/Node Js/pathmodule/index.js"));
// returns extension of the file here .js

console.log(path.join("c:", "nodejs", "first project", "index.js"));
// joins or creates a new file using the arguments/ parameter

console.log(path.join("c:", "nodejs", "first project", "index.js", ".."));
// will skip up two level

console.log(path.join("c:", "nodejs", "first project", "index.js", "..", ".."));
// will skip up two level two times

console.log(path.normalize("c://course\\reduc\\nodejs\\store\\inde.js"));
// this is used to normaliz a carzy poor written code

console.log(path.parse(path.normalize("c://course\\reduc\\nodejs\\store\\inde.js")));
// used ot give information about a path
// eg: root, dir, base, extension, name of file

console.log(path.parse('e:/Node Js/pathmodule/index.js').base);
// for getting base name only
console.log(path.parse('e:/Node Js/pathmodule/index.js').name);
// for getting name of file 
console.log(path.parse('e:/Node Js/pathmodule/index.js').ext);
// for getting extension of file onley
