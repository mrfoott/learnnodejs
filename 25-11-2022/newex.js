const express = require('express')
const router = require('./routes/route')
const bodyParser = require('body-parser')

const app = express()

app.use('/', router)
app
    .use(express.json())
    // .use(bodyParser.urlencoded({extended: true}))
    // .use(express.bodyParser())

app.listen(3000, () => {
    console.log("Server dang chay ne!!!");
})