const mongoose = require("mongoose")

const pcSchema = mongoose.Schema({
    pcName: {type: String, require: true},
    ramName: {type: String, require: true},
    chipsetName: {type: String, require: true},
    memory: {type: Number, require: true},
    storage: {type: Number, require: true},
    gpuName: {type: String, require: true},
    psu: {type: Number, require: true},
})

module.exports = mongoose.model('pc', pcSchema)