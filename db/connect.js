const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Kshitij:kritika5@node-express-project.zpsgn80.mongodb.net/SwiftCart?retryWrites=true&w=majority'

const connectDB = ()=>{
    mongoose
        .connect(connectionString)
}

module.exports = connectDB