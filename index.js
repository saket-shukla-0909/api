const express = require('express');
const app = express(); 
const port = 8080;

app.use(express.json());
app.use('/users', require('./routes/userroutes'));

app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`Server has started at ${port}`)
    }

})