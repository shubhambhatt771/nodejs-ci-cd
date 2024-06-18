const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res)=>{
    res.json({
        status: 200,
        message:'Hello World'
    })
});

app.listen(4000, ()=>{
    console.log('server is listening on port ', port);
})