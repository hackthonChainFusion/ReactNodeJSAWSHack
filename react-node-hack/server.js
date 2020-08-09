const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const app = require('./backend/app');

app.set('port',port)
const server = http.createServer(app);
// var routes = require('./backend/routesfiles'); //importing route
// routes(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});