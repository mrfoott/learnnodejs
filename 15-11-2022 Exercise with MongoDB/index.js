const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT || 3000
const RootRoute = require('./Routes/RootRoutes')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser());

mongoose.connect(process.env.URI, function (err, db) {
    if (err) throw err;
    console.log("Database is available!!!");
})

app.use('/', RootRoute)

app.listen(PORT, () => {
    console.log("Server dang chay ne!!!");
})