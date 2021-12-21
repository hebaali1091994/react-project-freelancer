const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");
const Order = require('../models/Order')
const router = require('express').Router();

router.post('/', verifyToken, async(req,res)=>{
    const newOrder =  new Order(req.body);

    try{
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder)
    }catch(error){
        res.status(500).json(error)
    }
})

// Start Update 

router.put('/:id', verifyTokenAndAdmin, async(req, res)=>{
 
    try {
        const updatedOrder = await Order.findByIdAndUpdate( req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOrder);
      } catch (err) {
        res.status(500).json(err);
      }
    });

// Delete

    router.delete('/:id', verifyTokenAndAdmin,  async (req,res)=>{
try{
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order Deleted');
}catch(error){
    res.status(500).json(error)
}
})
//User Get Cart

router.get('/:userId', async (req,res)=>{
 try{
    const Orderes = await Order.find({userId: req.params.userId});
     res.status(200).json(Orderes)
    }catch(error){
     res.status(500).json(error)

 }
    })

router.get('/', verifyTokenAndAdmin, async (req,res)=>{
    try{
    const Orders = await Order.find();
    res.status(200).json(Orders)
}catch(error){
    res.status(500).json(error)

}
} )



router.post('/newOrder/:userId', verifyToken, async(req,res)=>{
    const newOrder = new Order({
        userId:req.params.userId,
        products:req.body.products,
        amount:req.body.amount,
        address:req.body.address,
        status:req.body.status
    });
    try{
        const SaveOrderUser = await newOrder.save();
        res.status(200).json({SaveOrderUser});
        

    }catch(error){
        res.status(500).json(error)
    }
})


module.exports = router;