const express = require('express')
require("dotenv").config()
const route = require('./routes/route')
const PORT = process.env.PORT || 3000
const fs = require('fs')
const url = require('url')



const app = express()
app.use(express.json())

app.use('/', (req, res) => {
    // const pathname = url.parse(req.url, true).pathname
    // console.log("Request for " + pathname + " received.");
    
    // fs.readFile(pathname.substr(1), (err, data) => {
    //     if (err) {
    //         res.writeHead(404, {'Content-Type': 'text/html'})
    //         console.log(err);
    //     } else {
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.write(data.toString())
    //     }
    //     res.end()
    // })

    // fs.readFile(pathname.substr(1), (err, data) => {
    //     if (err) {
    //         res.writeHead(404, {'Content-Type': 'text/html'})
    //         console.log(err);
    //     } else {
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.write(data.toString())
    //     }
    //     res.end()
    // })
    
    const date = req.param('date')
    const month = req.param('month')
    const year = req.param('year')

    

    res.writeHead(200, {'Content-Type' : 'text/html', 'encoding' : 'utf8'})

    res.write(`<h1>Ngay: ${date} Thang: ${month} Nam:${year}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
