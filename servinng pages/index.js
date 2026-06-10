import http from "http";

import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "OK", { "Content-type": "text/html" });
    fs.readFile("e:\\Node Js\\servinng pages\\index.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if(req.url)
  {
     res.writeHead(200, "OK", { "Content-type": "text/html" });
    fs.readFile("e:\\Node Js\\servinng pages\\about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });

  }else{
     res.writeHead(200, "OK", { "Content-type": "text/html" });
     res.end("<h3> 404 page not found</h3>");
  }
});

server.listen(8000, () => console.log("server up"));
