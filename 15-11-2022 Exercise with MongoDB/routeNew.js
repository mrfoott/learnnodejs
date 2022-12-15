const route = require('express').Router()

route.get('/', (req, res) => {
    res.render('home', { title : 'PC, RAM, and Chipset management' })
})

module.exports = route