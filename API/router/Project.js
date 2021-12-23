const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Project = require("../models/Project");
const router = require("express").Router();

//create new project
// Must Send User Id
router.post("/create/:id", async (req, res) => {
  const newproject = await new Project({
    userid: req.params.id,
    ChooseName: req.body.ChooseName,
    Tellus: req.body.Tellus,
    skills: req.body.skills,
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

router.post("/apply/:id", verifyToken, async (req, res) => {
  try {
    const porposal =
    {
      freelanceid: req.body.freelanceid,
      deccription: req.body.deccription,
      date: new Date(),
      BidAmount: req.body.BidAmount,
      numberofDay: req.body.numberofDay,

    }
    const mileStone =
    {
      Suggestmilestone: req.body.Suggestmilestone,
      paymentmilestone: req.body.paymentmilestone,
      datemileStone: req.body.datemileStone
    }



    const applayProject = await Project.findByIdAndUpdate
      (
        req.params.id,
        { $push: { freelances: porposal, millstobepayment: mileStone } },
        { new: true }
      )


    const newporposal = await applayProject.save();
    res.status(200).json(newporposal);

  } catch (err) {
    res.status(401).json(err);
  }

})

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
})
//all projects
router.get("/all", async (req, res) => {
  try {
    const allproject = await Project.find();
    res.status(200).json(allproject);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get("/allopened", async (req, res) => {
  try {
    const allproject = await Project.find({ state: "opened" });
    res.status(200).json(allproject);
  } catch (error) {
    res.status(401).json(error);
  }
});


//one project

router.get("/oneproject/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const oneproject = await Project.findById(req.params.id);
    res.status(200).json(oneproject);
  } catch (error) {
    res.status(401).json(error);
  }
});
router.get("/oneproject/", async (req, res) => {
  try {
    const oneproject = await Project.find({ freelanceId: req.body.freelanceId });
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

//filter projects by type
router.get("/fixed", verifyToken, async (req, res) => {
  const query = req.query.new;

  try {
    const Projects = query
      ? await Project.find().sort({ _id: -1 }).limit(5)
      : await Project.find({ type_of_project: "Pay fixed price" });
    res.status(200).json(Projects);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/hour", verifyToken, async (req, res) => {
  const query = req.query.new;

  try {
    const Projects = query
      ? await Project.find().sort({ _id: -1 }).limit(5)
      : await Project.find({ type_of_project: "Pay by the hour" });
    res.status(200).json(Projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
