const express = require('express');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "GET,POST,PATCH,DELETE,OPTIONS");
    next();
  });
app.use(('/taskslist'),(req,resp,next) => {
    // console.log(req.get('Authorization'))
    resp.status(200).json({message : "Response is received from NodeJS Server"})
})

module.exports = app;