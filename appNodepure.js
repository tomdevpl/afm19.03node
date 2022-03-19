const http = require('http');

const handler = (req, resp) => {
    console.log(`sample message`);
    resp.end("Hello World");

};

const server = http.createServer(handler);
const port = 3000;

server.listen(port, (err) => {
    if (err) { return console.log(`Wystapił błąd ${err.message}`); }
    return console.log(`Apka działa na porcie ${port}`);
})