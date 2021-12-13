const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
const User = require("../models/User");
const Category = require("../models/Category");
const project = require("../models/Project");
const Project = require("../models/Project");

//create  new catogry
router.post("/newCategory", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = await new Category(req.body);
  try {
    const saveCategory = await newCategory.save();
    res.status(200).json(saveCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});


//update category
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete category
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    const deleteproject = await Project.deleteMany({category: req.params.id})
     res.status(200).json("Category Is Deleted  ");
  } catch (error) {
    res.status(500).json(error);
  }
});


// Get One POST
router.get("/:id", async (req, res) => {
  try {
    const getCategory = await Category.findById(req.params.id);
    res.status(200).json(getCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All POST
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    if (username) {
      Categorys = await Category.find({ username });
    } else if (catName) {
      Categorys = await Category.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      Categorys = await Category.find();
    }
    res.status(200).json(Categorys);
    const getCategory = await Category.find();
    res.status(200).json(getCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
