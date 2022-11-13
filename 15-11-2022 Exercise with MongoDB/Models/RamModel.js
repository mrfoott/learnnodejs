const mongoose = require("mongoose")

const ramSchema = mongoose.Schema({
    ramName: String
})

module.exports = mongoose.model('ram', ramSchema)