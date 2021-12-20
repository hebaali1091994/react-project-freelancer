const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Project = require("../models/Project");
const router = require("express").Router();

//create new project 
// Must Send User Id
router.post("/create/:id", verifyToken, async (req, res) => {

  const newproject = await new Project({
    ChooseName: req.body.ChooseName,
    Tellus: req.body.Tellus,
    uploadimg: req.body.uploadimg,
    pay: req.body.pay,
    budget: req.body.budget,
    CurrencyCode: req.body.CurrencyCode,
    CurrencySymbol: req.body.CurrencySymbol,
    step_Four_Currency_code: req.body.step_Four_Currency_code,
    Minimum_Per_hour: req.body.Minimum_Per_hour,
    Maximum_Per_hour: req.body.Maximum_Per_hour,
    Maximum_fix_price: req.body.Maximum_fix_price,
    Minimum_fix_price: req.body.Minimum_fix_price,
    Day: req.body.Day,
    type_of_project: req.body.type_of_project,
    GUARANTEED: req.body.GUARANTEED,
    FEATURED: req.body.FEATURED,
    TOP_CONTEST: req.body.TOP_CONTEST,
    HIGHLIGHT: req.body.HIGHLIGHT,
    SEALED: req.body.SEALED,
    NDA: req.body.NDA,
    state: req.body.state,
    PRIVATE: req.body.PRIVATE,
    StepFiveLongContest: req.body.StepFiveLongContest,
  });
  try {
    const saveproject = await newproject.save();
    res.status(200).json(saveproject);
  } catch (error) {
    res.status(401).json(error);
  }
});
//id project
//applay porposals

router.post("/applay/:id", async (req, res) => {

  try {
    const newporposal =
    {
      freelanceid: req.body.freelanceid,
      deccription: req.body.deccription,
    }


    const applayProject = await Project.findByIdAndUpdate
      (
        req.params.id,
        { $push: { freelances: newporposal } },
        { new: true }
      );
    const nweproject = await applayProject.save();
    res.status(200).json(nweproject);

  } catch (err) {
    res.status(401).json(err);
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


router.post("/filter", async (req, res) => {
  try {

    const allproject = await Project.find(
      {
        Minimum_Per_hour: req.body.filtername

      }
    );
    res.status(200).json(allproject);

  } catch (error) {
    res.status(401).json(error);
  }
});
module.exports = router;