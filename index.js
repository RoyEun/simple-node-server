const http = require('http');
const router = require('./routes');

const port = 8080;

const server = http.createServer(function (req, res) {
  let routeHandler = router.route(req, res);
  routeHandler.handleRoute(req, res);
});

server.listen(port);

console.log(`Listening on port ${port}`);
