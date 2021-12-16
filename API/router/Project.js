const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Project = require("../models/Project");
const router = require("express").Router();

//create new project 
// Must Send User Id
router.post("/", async (req, res) => {
  
  const newproject = await new Project(req.body);
  try {
    const saveproject = await newproject.save();
    res.status(200).json(saveproject);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.post("/applay/:id",async(req,res)=>{
  try{
    const applayProject = await Project.findByIdAndUpdate
    (
      req.params.id,
        {$push:{freelances:req.body }},
         { new: true }
        );
        const nweproject = await applayProject.save();
      res.status(200).json(nweproject);

      }catch(err){
    res.status(401).json(error);
  }
  
  
})

//update project

router.put("/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },

      { new: true }
    );
    const saveproject = await updatedProject.save();
    res.status(200).json(saveproject);
  } catch (err) {
    res.status(500).json(err);
  }
});
//all projects
router.get("/all", async (req, res) => {
  try {
    const allproject = await Project.find();
    res.status(200).json(allproject);
  } catch (error) {
    res.status(401).json(error);
  }
});

//one project

router.get("/oneproject/:id", async (req, res) => {
  try {
    const oneproject = await Project.findById(req.params.id);
    res.status(200).json(oneproject);
  } catch (error) {
    res.status(401).json(error);
  }
});

//delete project
router.delete("/deleteproject/:id", async (req, res) => {
  try {
    const oneproject = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("Project Is Deleted");
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = router;
