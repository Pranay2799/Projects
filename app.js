const express=require('express');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">add</button></form>');

});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})    

app.use('/',(req,res,next)=>{
    res.send('<html><h2>Pranay says Hi</h2></html>');

});

app.listen(3000);