const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");
const Product = require('../models/Product')
const router = require('express').Router();

router.post('/', verifyTokenAndAuthorization, async(req,res)=>{
    const newProduct =  new Product(req.body);

    try{
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    }catch(error){
        res.status(500).json(error)
    }
})

// Start Update 

router.put('/:id', verifyTokenAndAuthorization, async(req, res)=>{
 
    try {
        const updatedProduct = await Product.findByIdAndUpdate( req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
    });

// Delete

    router.delete('/:id', verifyTokenAndAuthorization,  async (req,res)=>{
try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Product Deleted');
}catch(error){
    res.status(500).json(error)
}
})

router.get('/:id', async (req,res)=>{
 try{
    const Product = await Product.findById(req.params.id);
     res.status(200).json(Product)
    }catch(error){
     res.status(500).json(error)

 }
    })



    router.get('/',verifyTokenAndAdmin, async (req,res)=>{
        const qNew = req.query.new;
        const qCategory = req.query.Category;
    
        try{
            let Products;
          if(qNew){
            Products = await Product.find().sort({createdAt:-1}).limit(5);
        } else if(qCategory){
              Products = await Product.find({categories:{
                  $in:[qCategory],
              }})

          }else{
            Products = await Product.find();
          }
       
          res.status(200).json(Products)
        }catch(error){
            res.status(500).json(error);
        }
           })


module.exports = router;