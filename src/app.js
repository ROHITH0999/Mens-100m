const express = require('express');
require('./DB/conn');
const router=require('./routes/route')
const Port=process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use(router);


app.listen(Port,()=>{
    console.log("Express connected.....")
})