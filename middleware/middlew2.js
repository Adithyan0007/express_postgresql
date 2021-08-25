let express = require('express');
let app = express();

app.get('/profile',token,validation,(req,res)=>{
    console.log('user logged in');
    res.send('<h1>Display Profile</h1>')
})
function token(req,res,next){
    console.log('token is creating');
    setTimeout(()=>{
        const tok = 123
        req.token = tok
        
        next();
    },1000)
}
function validation(req,res,next){
    if(req.token){
        console.log('token approved');
        next();
    }else{
        res.send('<h1>hello</h1>')
    }
}
app.listen(3000);