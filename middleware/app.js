let express = require('express');
let app = express();
app.get('/profile',Token,(req,res,next)=>{
    console.log('get is running');
    res.send('<h1>hello</h1>')
    next();
},(req,res)=>{
    console.log('last middleware');
    
})

function Token(req,res,next){
    console.log('middleware is running');
    next();
}
app.listen(3001)