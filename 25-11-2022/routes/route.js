const route = require("express").Router()
const url = require('url')
const http = require('http')
const movies = require('../movies')
const fs = require('fs')

//GET
route.get('/', async (req, res) => {
    try {
        res.status(200).json('Hohoho Merry Christmas!!!')
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/movies', (req, res) => {
    try {
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/movies/:id([0-9]{1,})', (req, res) => {
    movies.forEach(phim => {
        try {
            if (req.params.id == phim.id) {
                res.status(200).json(phim)
            } else {
                res.status(404).json('Movie not found!!!')
            }
        } catch (error) {
            res.status(500).json('Server bi loi roi!!! :<')
        }
    })
})

route.post('/addmovies', (req, res) => {
    console.log(req.body);

    if (!req.body.name.toString().match(/[a-zA-Z0-9]/) ||
        !req.body.description.toString().match(/[a-zA-Z0-9]/)) {
        res.status(400)
        res.json({ message: "Bad request!!!" })
    } else {
        const newID = movies[movies.length - 1].id + 1
        const newName = req.body.name
        const newDescription = req.body.description

        

        movies.push({
            id: newID,
            name: req.body.name,
            description: req.body.description
        })
        res.status(200).json('Movie added')
    }
})

module.exports = route