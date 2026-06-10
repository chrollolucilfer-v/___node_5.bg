// allow to run our code synchronous ly

import * as fs from "fs";

// create a directory
fs.mkdirSync("e:/Node Js/FIle_module/Sync_api/new", { recursive: true });

// doe not need promise, try catch or await asycn

// remove director
fs.rmdirSync("e:/Node Js/FIle_module/Sync_api/new");
