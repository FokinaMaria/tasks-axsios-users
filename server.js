const { join } = require('path');
const express = require('express');
const { getData } = require('./utils');
const { getUsers } = require('./utils');
const { data } = require('./data.js');
const { users } = require('./data.js');


const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {
    //console.log(req.query);
    const { count } = req.query;
    const w = getData(data, count);
    //console.log('1zxc', w);
    
    res.send(w);
});

// TODO метод обработки запроса здесь
app.get('/users', (req, res) => {
    //console.log(req.query);
    const { count } = req.query;
    const us = getUsers(users, count);
    console.log('2parametr', count);
    console.log('2zxc', us);
    
    res.send(us);
});
app.listen(3000, () => console.log('port 3000'));
