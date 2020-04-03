const Product =require('../../model/product')

const adminDelete=async(req,res)=>{
    const idToDelete=req.params.id;
    await Product.deleteOne({_id: idToDelete}).exec();
        res.redirect('/admin')
}
module.exports=adminDelete;