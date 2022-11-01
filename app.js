const express = require('express');
const app = express();

//let PORT = 3000
let PORT = process.send.PORT || 3000;

const path = require('path');

app.listen(PORT, console.log('Listen on port', PORT));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})