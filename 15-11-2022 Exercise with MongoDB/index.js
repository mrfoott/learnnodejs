const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT || 3000
const { engine } = require ('express-handlebars');
const route = require('./Routes/RootRoutes')
const cors = require('cors')

const app = express()

app.use(express.json()).use(cors())

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main", layoutsDir: "./views/layouts", }));
app.set('view engine', 'handlebars');
app.set("views", "./views");

mongoose.connect(process.env.URI, function (err, db) {
    if (err) throw err;
    console.log("Database is available!!!");
})

// app.get('/', (req, res) => {
//     res.render('home', { title: 'Home Page' })
// })

app.use('/', route)

app.get('/ram', (req, res) => {
    res.render('ram', { title : 'RAM Management Page' })
})

app.get('/chipset', (req, res) => {
    res.render('chipset', { title : 'Chipset Management Page' })
})

app.get('/pc', (req, res) => {
    res.render('pc', { title : 'PC Management Page' })
})

app.listen(PORT, () => {
    console.log("Server dang chay ne!!!");
})