const route = require("express").Router()
const PC = require("../Models/PcModel")
const Chipset = require("../Models/ChipsetModel")
const Ram = require("../Models/RamModel")

// GET
route.get('/getAllPC', async (req, res) => {
    try {
        const findAllPC = await PC.find()
        res.status(200).json(findAllPC)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/getAllChipset', async (req, res) => {
    try {
        const findAllChipset = await Chipset.find()
        res.status(200).json(findAllChipset)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/getAllRam', async (req, res) => {
    try {
        const findAllRam = await Ram.find()
        res.status(200).json(findAllRam)
    } catch (error) {
        res.status(500).json(error)
    }
})

// POST
route.post('/addPC', async (req, res) => {
    try {
        // console.log(request.body);
        const pcToAdd = new PC({ "pcName": req.body.pcName })
        const responseData = await pcToAdd.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/addChipset', async (req, res) => {
    try {
        const chipsetToAdd = new Chipset({ "chipsetName": req.body.chipsetName })
        const responseData = await chipsetToAdd.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/addRAM', async (req, res) => {
    try {
        const ramToAdd = new Ram({ "ramName": req.body.ramName })
        const responseData = await ramToAdd.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

// PUT
route.put('/findByIDAndUpdatePC/:id', async (req, res) => {
    try {
        const data = {
            pcName: req.body.pcName
        }
        const pcToEdit = await PC.findByIdAndUpdate(req.params.id, data)
        const responseData = await pcToEdit.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/findByIDAndUpdateChipset/:id', async (req, res) => {
    try {
        const data = {
            chipsetName: req.body.chipsetName
        }
        const chipsetToEdit = await PC.findByIdAndUpdate(req.params.id, data)
        const responseData = await chipsetToEdit.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/findByIDAndUpdateRam/:id', async (req, res) => {
    try {
        const data = {
            ramName: req.body.ramName
        }
        const ramToEdit = await PC.findByIdAndUpdate(req.params.id, data)
        const responseData = await ramToEdit.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route