const express = require('express');
const MenSchema = require('../models/mensSchema');
const router = new express.Router();

// Test route
router.get('/', async (req, res) => {
    res.send("Router Hello World");
});

// Route to create a new men entry
router.post('/mens', async (req, res) => {
    try {
        const user = new MenSchema(req.body);
        const userData = await user.save();
        res.status(201).send(userData);  // Send response after data is saved
        console.log(userData);           // Log the saved data
    } catch (error) {
        console.log(`Input Error: ${error}`);
        res.status(400).send(error);
    }
});

//get information
router.get('/mens',async(req,res)=>{
    try{
        const data=await MenSchema.find();
        res.send(data);
    }
    catch(e)
    {
        res.status(401).send(e);
    }
})

//get information for indicidual

router.get('/mens/:name',async(req,res)=>{
    try{
        const name=req.params.name;
        const data=await MenSchema.findOne({name});
        if(!data)
            {
               return res.status(404).send();
            }
            else
            {
                res.send(data);
            }
    }
    catch(e)
    {
        res.status(401).send(e);
    }
})

//delete information for indicidual

router.delete('/mens/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=await MenSchema.findByIdAndDelete(id,req.body,{
            new:true
        });
        if(!data)
            {
               return res.status(404).send();
            }
            else
            {
                res.send(data);
            }
    }
    catch(e)
    {
        res.status(401).send(e);
    }
})
//update information for indicidual

router.patch('/mens/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=await MenSchema.findByIdAndUpdate(id,req.body,{
            new:true
        });
        if(!data)
            {
               return res.status(404).send();
            }
            else
            {
                res.send(data);
            }
    }
    catch(e)
    {
        res.status(401).send(e);
    }
})












module.exports = router;
