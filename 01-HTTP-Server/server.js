// import any module by using required() method 

const http = require('http');
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//hostname and port
// const hostname = '127.0.0.1';
const port = 5000;

//Creating server
const server = http.createServer((request, response) => {
    // defined MIME Type by using setHeader
     response.setHeader('Content-Type', 'text/html');
     response.statusCode = 200;
     response.end(`<h2>Welcome To NodeJS Server Creation</h2>`);
});


//listen the Port 
server.listen(port, () => {
    console.log(`NodeJS Server is started at http://localhost:${port}`);
});
