const Product =require('../../model/product')

const adminCreate=async (req,res)=>{
       
    const newProduct={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        //image:req.file.filename
    } 
    
    const product =await new Product(newProduct).save()
    console.log("New Product:", product)
    res.redirect('/admin')
}
module.exports=adminCreate;