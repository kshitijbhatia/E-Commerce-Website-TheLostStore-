const mongoose = require('mongoose')

const connectionString = YOUR_CONNECTION_STRING

const connectDB = ()=>{
    mongoose
        .connect(connectionString)
}

module.exports = connectDB
