const Product = require('../../model/product');

const adminUpdate = async (req, res) => {
    try{
    const idToUpdate = req.params.id;
    
    const updateProduct = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file.filename
    }
    if (req.file){
        console.log("Updating Products");
        updateProduct.image = req.file.filename
        /*updateProduct.name = req.body.name
        updateProduct.description = req.body.description
        updateProduct.price = req.body.price
        updateProduct.filename = req.body.filename*/
    }
    let filter = { _id: idToUpdate };

    let result = await Product.updateOne(filter, updateProduct).exec();
    //console.log("Result: ", result)
    }catch(err){
        console.log("ERR: ", err);
    }finally {
        res.redirect('/admin');
    }
}

module.exports = adminUpdate; 