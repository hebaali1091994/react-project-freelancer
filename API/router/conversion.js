const router = require("express").Router();
const Conversion = require("../models/Conversion");

//new convsersion
router.post("/", async (req, res) => {
  const newconversion = new Conversion({
    membars: [req.body.senderId, req.body.reciverId],
  });
  try {
    const saveconversion = await newconversion.save();
    res.status(200).json(saveconversion);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get conversion of usr

router.get("/:usrtId", async (req, res) => {
  try {

    const conversion=await Conversion.find({
        membars:{$in:[req.params.usrtId]} 
    })
    res.status(200).json(conversion)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
