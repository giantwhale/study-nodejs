const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});


app.get('/users', (req, res) => {
    res.status(200).send([
        {name:"Yue",  age:26},
        {name:"Jude", age:32},
        {name:"Dao",  age:40}
    ]);
})


app.listen(3000);
module.exports.app = app;
