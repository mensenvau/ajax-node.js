const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// Post so'rovni olish uchun 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get("/", (req, res) => {
    res.json({ "_id": " Bo'sh" })
})


app.get("/:id", (req, res) => {
    res.json({ "_id": req.params.id })
})

app.listen(3000, () => {
    console.log("Server Create . host : https://127.0.0.1:3000")
})