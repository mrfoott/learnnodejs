const mongoose = require("mongoose")

const ramSchema = mongoose.Schema({
    ramName: {type: String, require: true},
    memory: {type: Number, require: true, default: 0},
    bus: {type: Number, require: true, default: 0},
    price: {type: Number, require: true, default: 0}
})

module.exports = mongoose.model('ram', ramSchema)