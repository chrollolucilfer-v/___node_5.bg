// learning streams

// way to handle your data an dway
// of handling a large amount of data in chuncks
// instead of a huge amount

import { createReadStream } from "fs";

const stream = createReadStream("e:\\Node Js\\stream\\data.txt", {encoding: utf-8});
stream.on("data", (data) => {
  console.log(data);
});

// gets you data in bits or chunks
