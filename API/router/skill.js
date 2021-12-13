const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");
const Skill = require('../models/Skill')
const router = require('express').Router();

router.post('/', verifyTokenAndAdmin, async(req,res)=>{
    const newSkill =  new Skill(req.body);

    try{
        const saveSkill = await newSkill.save();
        res.status(200).json(saveSkill)
    }catch(error){
        res.status(500).json(error)
    }
})

// Start Update 

router.put('/:id', verifyTokenAndAdmin, async(req, res)=>{
 
    try {
        const updatedSkill = await Skill.findByIdAndUpdate( req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedSkill);
      } catch (err) {
        res.status(500).json(err);
      }
    });

// Delete

    router.delete('/:id', verifyTokenAndAdmin,  async (req,res)=>{
try{
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json('Skill Deleted');
}catch(error){
    res.status(500).json(error)
}
})

router.get('/:id', async (req,res)=>{
 try{
    const Skill = await Skill.findById(req.params.id);
     res.status(200).json(Skill)
    }catch(error){
     res.status(500).json(error)

 }
    })



    router.get('/',verifyTokenAndAdmin, async (req,res)=>{
        const qNew = req.query.new;
        const qCategory = req.query.Category;
    
        try{
            let Skills;
          if(qNew){
            Skills = await Skill.find().sort({createdAt:-1}).limit(5);
        } else if(qCategory){
              Skills = await Skill.find({categories:{
                  $in:[qCategory],
              }})

          }else{
            Skills = await Skill.find();
          }
       
          res.status(200).json(Skills)
        }catch(error){
            res.status(500).json(error);
        }
           })


module.exports = router;