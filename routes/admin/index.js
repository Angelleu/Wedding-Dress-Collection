const Product =require('../../model/product')

const admin = async (req, res) => {
    const products=await Product.find().exec();
    res.render('admin/index', {products})
}

module.exports = admin;