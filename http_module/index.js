import http from "http";

// created our first server
// http.createServer((req, res) => {});
// storing it in some sort of variable

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.setHeader("Content-Type", "text/html");
  re.statusCode = 404;
  res.statusMessage = "BAD";
  res.write("<h1> We are live</h1>");
});

server.listen(8000, () => console.log("Server Up! "));

// url '/' means home page
