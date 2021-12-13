const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");
const Cart = require('../models/Cart')
const router = require('express').Router();

router.post('/', verifyToken, async(req,res)=>{
    const newCart =  new Cart(req.body);

    try{
        const saveCart = await newCart.save();
        res.status(200).json(saveCart)
    }catch(error){
        res.status(500).json(error)
    }
})

// Start Update 

router.put('/:id', verifyTokenAndAuthorization, async(req, res)=>{
 
    try {
        const updatedCart = await Cart.findByIdAndUpdate( req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCart);
      } catch (err) {
        res.status(500).json(err);
      }
    });

// Delete

    router.delete('/:id', verifyTokenAndAuthorization,  async (req,res)=>{
try{
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart Deleted');
}catch(error){
    res.status(500).json(error)
}
})
//User Get Cart

router.get('/:userId', async (req,res)=>{
 try{
    const Cart = await Cart.findOne({userId: req.params.userId});
     res.status(200).json(Cart)
    }catch(error){
     res.status(500).json(error)

 }
    })

router.get('/', verifyTokenAndAdmin, async (req,res)=>{
    try{
    const Carts = await Cart.find();
    res.status(200).json(Carts)
}catch(error){
    res.status(500).json(error)

}
} )


module.exports = router;