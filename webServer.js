const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  //createServer 서버를 만들겠다.
  res.statusCode = 200;   //request : 클라이언트가 서버에 요청하는 것, response : 서버가 클라이언트의 요청에 응답하는 것
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
