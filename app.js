
const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req);
    res.write(JSON.stringify({ message: "Hello World"}));
    // process.exit();

});

server.listen(3000);
console.log('Aditya Das..');