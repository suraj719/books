
const express = require("express");
const app = express();
const books = require('./routes/books')

const connectDB = require('./db/connenct')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/books',books)


const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("server is listening"))
        
    } catch(error) {
        console.log(error)
    }
}
start()