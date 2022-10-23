const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method , req.headers);
  if (req.url === "/") {
    res.write("<h1> Welcome Home </h1>");
//     res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");

    res.write("<body><h1>Hello From My node js</h1></body>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'
    );
    res.write("</html");
    return res.end;
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    fs.readFile("message.text",utf8, (err,data)=>{
     console.log(data);
    })
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.text", message);
      res.setHeader("Location", "/");
      return res.end();
    });

//     res.statusCode = 302;
//     
    
  }
});

server.listen(4000);
