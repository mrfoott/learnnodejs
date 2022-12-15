const mongoose = require("mongoose")

const chipsetSchema = mongoose.Schema({
    chipsetName: {type: String, require: true},
    cores: {type: Number, require: true, default: 0},
    threads: {type: Number, require: true, default: 0},
    clockSpeed: {type: Number, require: true, default: 0},
    price: {type: Number, require: true, default: 0}
})

module.exports = mongoose.model('chipset', chipsetSchema)