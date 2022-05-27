const express = require('express');
const app = express();

let users = [];

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.post('/cadastro/', function (req, res) {
    const user = req.body;
    if (!user.name) {
        res.status(400).send('Put a valid name.');
        return ;
    };
    users.push(user);
    console.log(`${user.name} was created!`);
    res.send(`${user.name} was created!`);
});

module.exports = app;