// console.log("Hello Js");


// let money = false;

// if(money){
//     console.log("Buy");


// } else{
//     console.log("Bring Money");
// }


// (function(exports, require, module, __filename, __dirname){

// console.log("hello from iffee");
// })()
// console.log("heoo")
// what is the point of all these

// console.log(__filename);
// console.log(__dirname);
// The Module Wrapper is a mechanism used by Node.js to wrap every file
//  (module) inside a function before executing it.

// When you write a file like:

const name = "Bhaskar";

function greet() {
    console.log("Hello");
}

console.log(__filename);

// Node.js does not run it exactly as written.

// Internally, Node.js wraps it like this:

(function (exports, require, module, __filename, __dirname) {

    const name = "Bhaskar";

    function greet() {
        console.log("Hello");
    }

    console.log(__filename);

});