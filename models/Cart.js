const mongoose = require('mongoose')

const CartItemSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    productType:{
        type:String,
    },
    name:{
        type:String,
    },
    price:{
        type:String,
    },
    img:{
        type:String,
    },
    added_items:{
        type:Number,
        default:0
    }
})

const CartModel = mongoose.model('Cart',CartItemSchema)

module.exports = CartModel