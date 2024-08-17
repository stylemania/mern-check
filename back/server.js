const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
let userModel = require('./model/user-schema')
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://amalks48729:122476@sample.mnb6otj.mongodb.net/user')

app.get('/' , (req,res)=>{
   userModel.find().then((response)=>{
    res.json(response).status(200)
   }).catch((err)=>{
    res.json(err).status(500)
    console.log('post error '+err);
    
})
})
app.post('/post-data', (req,res)=>{
   userModel.create(req.body)
})

//listening a port
app.listen(4000,()=>{
    console.log('server is running on port 4000');
    
})