const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();
const Noti=require("../models/Noti");
const { Note } = require('@material-ui/icons');
  //create 
  router.post("/create",verifyToken,async(req,res)=>{

    const newnoti=await new Noti({
        message:req.body.message,
        date:new Date()
    
    
    })
    
    try {
        const savenoti= await newnoti.save();
        res.status(200).json(savenoti);
      } catch (err) {
        res.status(401).json(err);
      }
    
    })
    

    //get all


    router.get('/', async (req,res)=>{
        try{
        const notis = await Note.find();
        res.status(200).json(notis)
    }catch(error){
        res.status(500).json(error)
    
    }
    } )
//get one

router.get('/:notid', async (req,res)=>{
    try{
       const notis = await Noti.find({notiId: req.params.notid});
        res.status(200).json(notis)
       }catch(error){
        res.status(500).json(error)
   
    }
       })
