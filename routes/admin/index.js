const admin = async (req, res) => {
    const url = "mongodb://shoppingwebsite:shoppingwebsite1234@cluster0-shard-00-00-s7dg5.mongodb.net:27017,cluster0-shard-00-01-s7dg5.mongodb.net:27017,cluster0-shard-00-02-s7dg5.mongodb.net:27017/shoppingwebsite?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    //Mongoose implemtation
    const mongoose = require('mongoose');
    //const Product = require('../../models/product');
    let uri = "mongodb://shoppingwebsite:shoppingwebsite1234@cluster0-shard-00-00-s7dg5.mongodb.net:27017,cluster0-shard-00-01-s7dg5.mongodb.net:27017,cluster0-shard-00-02-s7dg5.mongodb.net:27017/shoppingwebsite?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    /*const products = await Product.find().exec();
    res.render('admin/index', { products })*/
    const Product=mongoose.model('Product',{
        name:String,
        description:String,
        price:Number,
        image:String

    })
    
    const products=await Product.find().exec();
    /*const products = [{
            id: 1,
            name: "Top",
            decription: "Aritzia top",
            price: 35.99,
            image: "https://aritzia.scene7.com/is/image/Aritzia/medium/s20_01_a01_67557_10006_on_b.jpg"
        },
        {
            id: 2,
            name: "Bottom",
            decription: "Aritzia top",
            price: 35.99,
            image: "https://aritzia.scene7.com/is/image/Aritzia/medium/s20_01_a01_67557_10006_on_b.jpg"
        },
        {
            id: 3,
            name: "Accessories",
            decription: "Aritzia top",
            price: 35.99,
            image: "https://aritzia.scene7.com/is/image/Aritzia/medium/s20_01_a01_67557_10006_on_b.jpg"
        }
    ]*/
    res.render('admin', {
        products
    })
}
module.exports = admin;