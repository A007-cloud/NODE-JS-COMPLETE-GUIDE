const http = require('http'); // Import Node.js core module

const server = http.createServer((req, res) =>{ //create web server
    console.log(req.url, req.method, req.headers); //set request

    if(req.url == '/home'){ //check the URL of the current request

        // set response header
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
            res.write('<head><title>Home</title></head>');
            res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }

    if(req.url == '/about'){ //check the url of the current request

        //set response header
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
            res.write('<head><title>About</title></head>');
            res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();

    }

    if(req.url == '/node'){ // check the URL of the current request

        // set response header
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
            res.write('<head><title>Node</title></head>');
            res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();

    }

    else{
        res.end('Invalid request');
    }


});

server.listen(4000);  // listen for any incoming requests


console.log('Node.js web server at port 4000 is running..');
