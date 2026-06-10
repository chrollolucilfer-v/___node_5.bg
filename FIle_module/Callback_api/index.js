import { error } from "console";
import * as fs from "fs";


// mkdir creating directory
// we are not working with promises

fs.mkdir("e:/Node Js/FIle_module/Callback_api/newfolder", (error)=>{
    if(error) throw error;
    console.log("Directory Created...")
});


// this created a new folder using callback
// you don't have to write try catch blokc
// and you can specify the callback function