const http = require("http");
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());

    
  } 
  else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1> About Charlie</h1> <p>Hey this is the about charlie !</p>");
  }
  else if (req.url == "/hello") {
    res.statusCode = 200;
    res.end(
      "<h1> This is Charlie</h1> <p>Hey this is the way to rock the world !</p>"
    );
  }
   else {
    res.statusCode = 400;
    res.end(
      "<h1>Not found</h1> <p>Heyy this page was not found on this server</p>"
    );
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
