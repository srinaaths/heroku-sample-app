const http = require('http')

const server = http.createServer((req, res) => {
res.write('hi wow');
res.end();
});

server.listen(process.env.PORT || 8080);
