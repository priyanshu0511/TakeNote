const express = require('express');
const router=express.Router();
const Note = require('../models/productModel');
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth)

// Get all notes-
router.get('/',async (req,res)=>{

    const user_id=req.user._id;

    try{

        const notes= await Note.find({user_id}).sort({createdAt: -1});
        res.json(notes);
    }
    catch(err){
        console.log("Error: ",err);
    }
})

// Post a note-
router.post('/',async (req,res)=>{
    const {title,content}=req.body;
    
    if(!title || !content){
        return res.status(400).json({message: "Title and Content are required."});
    }

    try{
        const newNote= new Note({title,content,user_id:req.user._id});
        await newNote.save();
        res.status(201).json(newNote);
    }
    catch(err){
        console.log("Error:",err);
        res.status(500).json({ message: "Failed to create note" });
    }
})

// Get a single note-
router.get('/:id', async (req,res)=>{
    const id=req.params.id;

    try{
        const getNote = await Note.findById(id);
        if(!getNote){
            return res.status(404).json({message: "Note not found."});
        }
        res.status(200).json(getNote);
    }
    catch(err){
        console.log("Error:",err);
        res.status(500).json({message: "Error while fetching note."})
    }
})

// Update a note-
router.put('/:id',async(req,res)=>{
    const {title,content}=req.body;

    try{
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true, runValidators: true});
        if(!updatedNote){
            return res.status(404).json({message: "Note not found."});
        }
        res.json(updatedNote);
    }
    catch(err){
        console.log("Error:",err);
        res.status(500).json({message: "Error while fetching note."})
    }
})

// Delete a note-
router.delete('/:id',async(req,res)=>{
    try{
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message:"Note not found"})
        }
        res.json({message:"Note deleted successfully."});
    }
    catch(err){
        console.log("Error:",err);
        res.status(500).json({message: "Error while deleting note."})
    }
})

module.exports = router