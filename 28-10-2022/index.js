const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    res.end(fs.readFileSync('./main.html', {encoding:'utf-8', flag:'r'}))
})