

const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('Pranay is Hear');
    next();

});
app.use((req,res,next)=>{
    console.log('Shreya is Hear');
    res.send('<html><h2>Pranay says Hi</h2></html>');

});

app.listen(3000);