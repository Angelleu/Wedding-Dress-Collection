const express =require('express')
const app =express();
const multer=require('multer');
var bodyParser =require('body-parser')
const port =process.env.port || 3000;

<<<<<<< HEAD
//multer storage
=======
>>>>>>> cf2445d0ebcec267c32cd9a45c41997c8b415e0b
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})

const upload=multer({storage})
<<<<<<< HEAD

//Mongoose implemtation
const mongoose = require('mongoose');
let uri = "mongodb://shoppingwebsite:shoppingwebsite1234@cluster0-shard-00-00-s7dg5.mongodb.net:27017,cluster0-shard-00-01-s7dg5.mongodb.net:27017,cluster0-shard-00-02-s7dg5.mongodb.net:27017/shoppingwebsite?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});
=======
>>>>>>> cf2445d0ebcec267c32cd9a45c41997c8b415e0b

//middlewares
app.set('view engine','pug')
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened:false}))

//module
const home=require('./routes/home')
const newArrival=require('./routes/newArrival')
const women=require('./routes/women')
const contact=require('./routes/contact')
const onSale=require('./routes/onSale')
const adminIndex=require('./routes/admin')
const adminCreate=require('./routes/admin/create')
const adminCreatePost=require('./routes/admin/createPost')
const adminDelete=require('./routes/admin/delete')
const adminUpdate=require('./routes/admin/update')
const adminUpdatePost=require('./routes/admin/updatePost')
const adminLottory=require('./routes/admin/lottory')


//app.get('/',(req,res)=>res.send(`Welcome to final project`))
app.get('/',home)
app.get('/newArrival',newArrival)
app.get('/women',women)
app.get('/contact',contact)
app.get('/onSale',onSale)
app.get('/admin',adminIndex)
app.get('/admin/create',adminCreate)
<<<<<<< HEAD
app.get('/admin/delete/:id',adminDelete)
app.get('/admin/update/:id',adminUpdate)
app.post('/admin/update/:id',upload.single('image'),adminUpdatePost)
app.post('/admin/create', upload.single('image'), adminCreatePost);
app.get('/admin/lottory',adminLottory)
=======
// app.post('/admin/create',adminCreatePost);
app.get('/admin/delete/:id',adminDelete)
app.get('/admin/update',adminUpdate)
app.post('/admin/create', upload.single('image'), adminCreatePost);
>>>>>>> cf2445d0ebcec267c32cd9a45c41997c8b415e0b


app.listen(port,()=>console.log(`Shopping site running on port ${port}`));