const http = require('http')
const fs = require('fs')

// Read file sync style
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type" : "text/html"
//     })
//     res.end(fs.readFileSync('./main.html', {encoding:'utf-8', flag:'r'}))
// })

// Read file async style
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    fs.readFile('./main.html', {encoding: 'utf-8'}, (err, data) => {
        res.end(data)
    })
})

server.listen(9999, () => {
    console.log('Serves is listening!!!')
})