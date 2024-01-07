// const mongoose = require('mongoose')

// const itemSchema = new mongoose.Schema({
//     id:{
//         type: String,
//         required:true
//     },
//     name:String,
//     price:String,
//     img:String,
//     added_items:Number,
// })

// const categorySchema = new mongoose.Schema({
//     categoryName:String,
//     items:[itemSchema],
// })

// const storeSchema = new mongoose.Schema({
//     "t-shirts-1": [categorySchema],
//     "tote-bags-1": [categorySchema],
//     "cargos-1": [categorySchema],
//     "accessories-1": [categorySchema],
// });

// const StoreModel = mongoose.model('Store',storeSchema);

// module.exports = StoreModel;

const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
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

const ItemModel = mongoose.model('Store',ItemSchema);

module.exports = ItemModel;