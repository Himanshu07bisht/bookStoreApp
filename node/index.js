const http = require("http");


const PORT = 2000;
const hostname = "localhost"
const server = http.createServer((req, res, next)=>{
    

     res.end("<h1>Heloo World</h1>");
});

server.listen(PORT, hostname , ()=>{
     console.log('Server is working on http://${hostname}:${PORT})');
})