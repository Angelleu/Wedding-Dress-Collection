const Product = require('../model/product');
const newArrival=async(req,res)=>{
    
        const products = await Product.find().exec();
     
    res.render('newArrival',{products})
}
module.exports=newArrival;