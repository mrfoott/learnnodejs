const mongoose = require("mongoose")

const chipsetSchema = mongoose.Schema({
    chipsetName: String
})

module.exports = mongoose.model('chipset', chipsetSchema)