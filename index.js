const express =require('express')
const app =express();
const port =3000;

//middlewares
app.set('view engine','pug')
app.use(express.static('public'))

//module
const home=require('./routes/home')
const newArrival=require('./routes/newArrival')
const women=require('./routes/women')
const men=require('./routes/men')
const kid=require('./routes/kid')
const onSale=require('./routes/onSale')
const adminIndex=require('./routes/admin/index')
const adminCreate=require('./routes/admin/create')
const adminDelete=require('./routes/admin/delete')
const adminUpdate=require('./routes/admin/update')


//app.get('/',(req,res)=>res.send(`Welcome to final project`))
app.get('/',home)
app.get('/newArrival',newArrival)
app.get('/women',women)
app.get('/men',men)
app.get('/kid',kid)
app.get('/onSale',onSale)
app.get('/admin',adminIndex)
app.get('/admin/create',adminCreate)
app.get('/admin/delete',adminDelete)
app.get('/admin/update',adminUpdate)




app.listen(port,()=>console.log(`Shopping site running on port ${port}`));