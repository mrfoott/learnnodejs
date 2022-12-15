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
        const pcToAdd = new PC({
            "pcName": req.body.pcName,
            "ramName": req.body.ramName,
            "chipsetName": req.body.chipsetName,
            "memory": req.body.memory,
            "storage": req.body.storage,
            "gpuName": req.body.gpuName,
            "psu": req.body.psu
        })
        const responseData = await pcToAdd.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/addChipset', async (req, res) => {
    try {
        const chipsetToAdd = new Chipset({ 
            "chipsetName": req.body.chipsetName,
            "cores": req.body.cores,
            "threads": req.body.threads,
            "clockSpeed": req.body.clockSpeed,
            "price": req.body.price
        })
        const responseData = await chipsetToAdd.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/addRAM', async (req, res) => {
    console.log(req.body);
    // try {
    //     const ramToAdd = new Ram({ 
    //         "ramName": req.body.ramName,
    //         "memory": req.body.memory,
    //         "bus": req.body.bus,
    //         "price": req.body.price
    //     })
    //     const responseData = await ramToAdd.save()
    //     res.status(200).json(responseData)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

// PUT
route.put('/findByIDAndUpdatePC/:id', async (req, res) => {
    try {
        const data = {
            pcName : req.body.pcName,
            ramName : req.body.ramName,
            chipsetName : req.body.chipsetName,
            memory : req.body.memory,
            storage : req.body.storage,
            gpuName : req.body.gpuName,
            psu : req.body.psu
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
            chipsetName : req.body.chipsetName,
            cores : req.body.cores,
            threads : req.body.threads,
            clockSpeed : req.body.clockSpeed,
            price: req.body.price
        }
        const chipsetToEdit = await Chipset.findByIdAndUpdate(req.params.id, data)
        const responseData = await chipsetToEdit.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/findByIDAndUpdateRam/:id', async (req, res) => {
    try {
        const data = {
            ramName : req.body.ramName,
            memory : req.body.memory,
            bus : req.body.bus,
            price : req.body.price
        }
        const ramToEdit = await Ram.findByIdAndUpdate(req.params.id, data)
        const responseData = await ramToEdit.save()
        res.status(200).json(responseData)
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE
route.delete('/findByIDAndDeletePC/:id', async (req, res) => {
    try {
        await PC.findByIdAndDelete(req.params.id)
        res.status(200).json('PC Deleted!!!')
    } catch (error) {
        res.status(500).json(error)
    }
})

route.delete('/findByIDAndDeleteRam/:id', async (req, res) => {
    try {
        await Ram.findByIdAndDelete(req.params.id)
        res.status(200).json('Ram Deleted!!!')
    } catch (error) {
        res.status(500).json(error)
    }
})

route.delete('/findByIDAndDeleteChipset/:id', async (req, res) => {
    try {
        await Chipset.findByIdAndDelete(req.params.id)
        res.status(200).json('Chipset Deleted!!!')
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route