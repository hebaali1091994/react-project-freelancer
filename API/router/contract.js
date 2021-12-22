const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  const Project = require("../models/Project");
  const frelancerId=require("../models/User")
  const cilentId=require("../models/User")
  const Contract=require("../models/contract")
  const router = require("express").Router();



  //create 
router.post("/create",verifyToken,async(req,res)=>{

const newcontract=await new Contract({
    ContractName:req.body.ContractName,
    description:req.body.description,
    budget: req.body.budget,
   freelanceId:req.body.freelanceId,
   cilentId:req.body.cilentId,
   projectId:req.body.projectId,
   feedbackfreelancer:req.body.feedbackfreelancer,
   feedbackcilent:req.body.feedbackcilent


})

try {
    const savecontract = await newcontract.save();
    res.status(200).json(savecontract);
  } catch (err) {
    res.status(401).json(err);
  }

})



//update


router.put("/update/:id", async (req, res) => {
    try {
      const updatedcontract = await Contract.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
  
        { new: true }
      );
      const savecontract = await updatedcontract.save();
      res.status(200).json(saveproject);
    } catch (err) {
      res.status(500).json(err);
    }
  })

  //all contract

  router.get("/all", async (req, res) => {
    try {
      const allcontract = await Contract.find();
      res.status(200).json(allcontract);
    } catch (error) {
      res.status(401).json(error);
    }
  });


  //one contract



  router.get("/oneproject/:id", async (req, res) => {
    try {
      const onecontract = await Contract.findById(req.params.id);
      res.status(200).json(onecontract);
    } catch (error) {
      res.status(401).json(error);
    }
  });



  //delete

  router.delete("/deletecontract/:id", async (req, res) => {
    try {
      const onecontract = await Contract.findByIdAndDelete(req.params.id);
      res.status(200).json("contract Is Deleted");
    } catch (error) {
      res.status(401).json(error);
    }
  });
  
  module.exports = router;