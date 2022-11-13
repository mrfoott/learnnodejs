const mongoose = require("mongoose")

const pcSchema = mongoose.Schema({
    pcName: {type: String}
})

module.exports = mongoose.model('pc', pcSchema)