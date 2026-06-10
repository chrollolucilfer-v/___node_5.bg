// providing routing just using node js

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1> Home </h1>");
  } else if (req.url === "/about") {
    res.end("<h2> About section </h2>");
  } else{
    res.end("<h1> 404 page not found</h1>")
  }
});

server.listen(4004, () => console.log("server up"));

// /homepage
// / about

// /contact id
// basic simple routing
