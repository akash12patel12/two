const http  = require('http')







const server = http.createServer((req,res)=>{
     // console.log(req.url, req.method , req.headers);
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>')
     res.write('<head><title>My First Page</title></head>')

     res.write('<body><h1>Hello From My node js</h1></body>')
     if(req.url === '/home'){
          res.write('<h1> Welcome Home </h1>')
     }
     else if(req.url === '/about'){
          res.write('<h1> Welcome to about Page </h1>')
     }
     else if(req.url === '/node'){
          res.write('<h1> Welcome To Nodejs Project </h1>')
     }
     res.write('</html')
     res.end();
     
});

server.listen(4000);