const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const Project = require("../models/Project");
const router = require("express").Router();

//create new project
router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const { projectName, budget, description, state, category } = req.body;
  const newproject = await new Project({
    projectName,
    budget,
    description,
    state,
    user_id: req.user.id,
    category,
  });
  try {
    const saveproject = await newproject.save();
    res.status(200).json(saveproject);
  } catch (error) {
    res.status(401).json(error);
  }
});

//update project

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
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
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
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
