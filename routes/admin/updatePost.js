const Product = require('../../model/product');

const adminUpdate = async (req, res) => {

    const idToUpdate = req.body.id;

    const updateProduct = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file.filename
    }

    let filter = { _id: idToUpdate };

    let result = await Product.updateOne(filter, updateProduct).exec();
    console.log("Result: ", result)

    res.redirect('/admin');
}

module.exports = adminUpdate; 