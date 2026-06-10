// importing os to use

import os from "os";

console.log(os.platform());
// on windows even if you have 64 it will give win32
// so use os.arch()

console.log(os.arch());
// gives us x64
console.log(os.cpus());
// models speed , times

console.log(os.hostname());
//gives name of host

console.log(os.homedir());
// give home dir path
// C:\Users\Dell

console.log(os.networkInterfaces());

console.log(os.freemem());
// gives how much free memory you have


console.log(os.totalmem());
// gives total memory 