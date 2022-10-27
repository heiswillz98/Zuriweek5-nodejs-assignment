const http = require("http");
const fs = require("fs");

const port = 3000;



//create a server
http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile("index.html", (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url === "/about"){
        fs.readFile("about.html", (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url === "/contact"){
        fs.readFile("contact.html", (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url === "/home"){
        fs.readFile("index.html", (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    
    
    //write a response to client
    //end response
}).listen(port, ()=>{
    console.log("Server is running on port 3000");
}); //server port listens on port 3000
