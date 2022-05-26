require('module-alias/register');
const http = require('http');
const app = require('@app');
const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running in => http://127.0.0.1:${port}`);
});
