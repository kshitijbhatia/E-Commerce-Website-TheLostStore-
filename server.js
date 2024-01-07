const express = require('express');
const path = require('path');
const connectDB = require('./db/connect.js')
const Store  = require('./models/Task')
const User = require('./models/User.js');
const Cart = require('./models/Cart.js')
const { userInfo } = require('os');

const app = express();

const PORT = 3000;
let user = {
    first_name:"",
    last_name:"",
    email:"",
};

app.use(express.json());
app.use(express.static('../client/build'))








app.get('/',(req,res)=>{
    res.end()
})

app.get('/api/getUserData',async(req,res)=>{
    try{
        res.status(201).json({first_name:user.first_name,last_name:user.last_name,email:user.email});
    }catch(err){
        console.log('Error Sending Usr Data', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/api/getCartData',async(req,res)=>{
    try{
        const all_items = await Cart.find();
        res.status(200).json(all_items);
    }catch(err){
        console.log("Error Sending Cart Data",err);
    }
})







app.post('/api/getData',(req,res)=>{
    const data = req.body;
    console.log("Data received Succesfully",data)
    res.status(200).send(data);
})

app.post('/api/getRegData', async (req,res)=>{
    try{
        const data = req.body;

        const existingUser = await User.findOne({email:data.email});

        if(existingUser){
            return res.status(400).json({error:"Email Already Exists"});
        }

        const newUser = await User.create(data);
        user = newUser;
        console.log("Data Received and User Made Succesfully");
        res.status(200).send("Success");
    }catch(err){
        console.log("Error:",err);
    }
})

app.post('/api/getLogData',async(req,res)=>{
    try{
        const data = req.body;
        
        const existingUser = await User.findOne({email:data.email,password:data.password});

        if(existingUser){
            user = existingUser;
            return res.status(200).json({msg:"Data Sent Succesfully"});
        }

        res
        .status(401)
        .send("Username Or password Incorrect");

    }catch(err){
        console.log("Error receiving data: ",err);
    }
})

app.post('/api/product', async(req,res)=>{
    try{
        const {type,productID} = req.body;
        const product = await Store.findOne({productType:type,id:productID});

        res.status(200).send(product);
    }catch(err){
        console.log("Error sending product to product page ",err);
    }
})

app.post('/api/clothes', async (req, res) => {
    try {
        const {type} = req.body;
        const clothes = await Store.find({productType:type});
        res.status(201).json(clothes);
    } catch (error) {
        console.error('Error creating new item:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.post('/api/sendCartItem', async (req,res)=>{
    try{
        const {id,productType,name,price,img,added_items} = req.body;
        const newCartItem = await Cart.create({id:id,name:name,productType:productType,price:price,img:img,added_items:added_items+1});
        console.log("Item added to cart!!!");
    }catch(err){
        console.log("Error getting product for cart : ",err);
    }
})










//This lets react router take over for all the routes created in reactjs file
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/build','index.html'))
})

const start = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Connected to Port:${PORT}`);
        })
    }catch(err){
        console.log(err);
    }
}

start()