const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes= require('./routes/userRoutes');
require("dotenv").config();

const app= new express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  }));
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World !!")
})

app.use('/api/notes',noteRoutes);
app.use('/api/user',userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(console.log("DB Connected!"))
    .catch((err)=>(console.log(err)));

app.listen(5000,()=>{
    console.log("Server listening on port 5000");
})