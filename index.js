const express =require('express')
const app =express();
const multer=require('multer');
var bodyParser =require('body-parser')
const port =process.env.port || 3000;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})

const upload=multer({storage})

//middlewares
app.set('view engine','pug')
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened:false}))

//module
const home=require('./routes/home')
const newArrival=require('./routes/newArrival')
const women=require('./routes/women')
const men=require('./routes/men')
const kid=require('./routes/kid')
const onSale=require('./routes/onSale')
const adminIndex=require('./routes/admin')
const adminCreate=require('./routes/admin/create')
const adminCreatePost=require('./routes/admin/createPost')
const adminDelete=require('./routes/admin/delete')
const adminUpdate=require('./routes/admin/update')
const adminUpdatePost = require('./routes/admin/updatePost')


//app.get('/',(req,res)=>res.send(`Welcome to final project`))
app.get('/',home)
app.get('/newArrival',newArrival)
app.get('/women',women)
app.get('/men',men)
app.get('/kid',kid)
app.get('/onSale',onSale)
app.get('/admin',adminIndex)
app.get('/admin/create',adminCreate)
app.get('/admin/delete/:id',adminDelete)
app.post('/admin/create', upload.single('image'), adminCreatePost);
app.get('/admin/update/id', adminUpdate)
app.post('/admin/update',upload.single('image'), adminUpdatePost)


app.listen(port,()=>console.log(`Shopping site running on port ${port}`));