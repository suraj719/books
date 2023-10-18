const mongoose =require('mongoose')

const BookSchema = new mongoose.Schema({
    name:String
})

module.exports = mongoose.model('book', BookSchema)