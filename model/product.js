const mongoose = require('mongoose');
  //Mongoose Model
const Product=mongoose.model('Product',{
    name:String,
    description:String,
    price:Number,
    image:String
});
module.exports= Product;