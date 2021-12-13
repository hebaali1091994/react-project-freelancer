const router = require("express").Router();
const Message = require("../models/Message");

//add

router.post("/", async (req, res) => {
  const newmessage = new Message(req.body);
  try {
    const savemessage = await newmessage.save();
    res.status(200).json(savemessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/:conversionId", async (req, res) => {
  try {

    const message=await Message.find({

        conversionId:req.params.conversionId
    })
    res.status(200).json(message)
  } catch (err) {
    res.status(200).json(err);
  }
});

module.exports = router;
