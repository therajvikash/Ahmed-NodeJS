const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;


//Array Creating
let Array = ['1', 2, 3, 4, 5, 6, 7, 8, 9, "g", 'f', 't'];

//Object Creating
let jsondata = [
    {
        name :" vikash",
        job : "VIP",
        salary : 0
    },
    {
        name :" vikash",
        job : "VIP",
        salary : 0
    },
    {
        name :" vikash",
        job : "VIP",
        salary : 0
    },
    {
        name :" vikash",
        job : "VIP",
        salary : 0
    }
]


//Creating server
const server = http.createServer((request, response) => {
    // defined MIME Type by using setHeader
     response.setHeader('Content-Type', 'text/html');
     response.statusCode = 200;
     let requestedURL = request.url;
     if(requestedURL === '/'){
        response.end(`<h2>Welcome To HomePage</h2>`);
    }
    else if(requestedURL==='/about'){
        response.end(`<h2>Welcome To About Page</h2>`);
    }
    else if(requestedURL==='/contact'){
        response.end(`<h2>Welcome To contact Page</h2>`);
    }
    else if(requestedURL==='/json'){
        response.end(`${JSON.stringify(jsondata)}`);
    }
    else if(requestedURL==='/array'){
        response.end(`${Array}`);
    }
});


//listen the Port 
server.listen(port, () => {
    console.log(`NodeJS Server is started at http://localhost:${port}`);
});
