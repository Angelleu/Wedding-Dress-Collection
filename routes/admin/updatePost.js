const Product =require('../../model/product')

const adminUpdate=async (req,res)=>{
    const idToUpdate = req.params.id;   
    const updateProduct={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        //image:req.file.filename
    } 
    let filter={_id:idToUpdate} 
    let result = await Product.updateOne(filter, updateProduct).exec();
    //const product =await new Product(newProduct).save()
    console.log("Result:", result)
    res.redirect('/admin')
}
module.exports=adminUpdate;