const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json requests
app.use(bodyParser.json());

const db = require("./config/keys").mongoUrl;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Up and Running on ${PORT}`))