const express = require('express');
const data = require('./data.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/data', (req, res) => {
    res.send(data);
})
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`I need data for id: ${id}`);
    const info = data.find(info => info.id === id) || {};
    res.send(info);
})

app.listen(port, () => {
    console.log(`my first server running on port: ${port}`)
})