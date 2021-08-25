const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json())

//post method
app.post('/user/add',(req,res)=>{
    let existdata = getuserdata();
    const userdata = req.body

    if(userdata.name == null || userdata.age==null || userdata.job == null){
        return res.status(401).send({error:true,message:"data missing"})
    }else{
        existdata.push(userdata)
        adddata(existdata);
        res.status(200).send({success:true, msg : "data added successfully"})
    }
})


//get method

app.get('/user/show',(req,res)=>{
    const users = getuserdata();
    res.send(users)

})


//update method

app.patch('/user/update/:name',(req,res)=>{
    const username = req.params.name
    const userdata = req.body
    const existdata = getuserdata()

    const findexist = existdata.find((user) => user.name === username)
    if(!findexist){
        res.send({err : true, msg : 'no such user exist'})
    }
    const updateuser = existdata.filter((user)=>{
        user.name != username;
        
    })
    updateuser.push(userdata);

    adddata(updateuser);
    console.log(existdata);
    res.send({success: true, msg: 'User data updated successfully'})
    

})
//delete method

app.delete('/user/delete/:name',(req,res)=>{

    const username = req.params.name

    const existdata = getuserdata()

    const filterdata = existdata.filter((users)=>{
        users.name !== username
    })
    
    if(filterdata.length === existdata.length){
        res.send({err:true, msg:"no such user"})
    }
    adddata(filterdata)
    res.send({success:true,msg:"deleted successfully"})
    

})

function getuserdata(){
    let udata = fs.readFileSync('data.json')
    udata = JSON.parse(udata)
    return udata;
}
 function adddata(data){
     const stringdata = JSON.stringify(data)
     fs.appendFile('data.json',stringdata)
 }
 app.listen(3000,()=>{
     console.log('server is running')
 })