const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");
const User = require('../models/User')
const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
    },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});
exports.uploadImg = multer({storage: storage}).single('Image');
//update user or admin
router.put('/:id', verifyTokenAndAuthorization, async(req, res)=>{
    if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate( req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    });

    //delete user
router.delete('/:id', verifyTokenAndAuthorization,  async (req,res)=>{
try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('user Deleted');
}catch(error){
    res.status(500).json(error)
}
})
//get one user
router.get('/one/:id', async (req,res)=>{
 try{
    const Admin = await User.findById(req.params.id);

     const { password , ...others } = Admin._doc
     res.status(200).json(others)
    }catch(error){
     res.status(500).json(error)

 }
    })


//get all users
    router.get('/',verifyTokenAndAdmin, async (req,res)=>{
        const query = req.query.new;
    
        try{
           const Users = query ? await User.find().sort({_id:-1}).limit(5): await  User.find({typeUser:"user"});
                   res.status(200).json(Users)
           }catch(error){
            res.status(500).json(error)
       
        }
           })



               router.get('/all', async (req,res)=>{
        const query = req.query.new;
    
        try{
           const Users = query ? await User.find().sort({_id:-1}).limit(5): await User.find({typeUser:"user"});
                   res.status(200).json(Users)
           }catch(error){
            res.status(500).json(error)
       
        }
           })



//all admins


router.get('/admin',verifyTokenAndAdmin, async (req,res)=>{
  const query = req.query.new;

  try{
     const Users = query ? await User.find().sort({_id:-1}).limit(5): await  User.find({typeUser:"admin"});
             res.status(200).json(Users)
     }catch(error){
      res.status(500).json(error)
 
  }
     })



           //State 

router.get('/state', verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear  = new Date(date.setFullYear(date.getFullYear() - 1));

    try{
       const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)

    }catch(error){
        res.status(500).json(error);
    }
})


router.get('/',verifyTokenAndAdmin, async (req,res)=>{
  const countryUser = req.query.country;
  const country = req.query.country;
  const qCategory = req.query.Category;

  try{
      let Quser;
    if(countryUser){
      Quser = await User.find().sort({Country:-1});
  } else if(qCategory){
    Quser = await User.find({categories:{
            $in:[qCategory],
        }})

    }else{
      Quser = await User.find();
    }
 
    res.status(200).json(Quser)
  }catch(error){
      res.status(500).json(error);
  }
     })
module.exports = router;