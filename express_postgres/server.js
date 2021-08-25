const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
//  app.use(cors());

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//get all
app.get('/todos/get',async(req,res)=>{
    try{
        const alltodo = await pool.query('SELECT * FROM todo');
        res.json(alltodo.rows);
    }catch(err){ 
        console.log(err);
    }
})

//get one


//create a todo
app.post('/todos',async(req,res)=>{
    try{
        const{description} = req.body;
        const newtodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",[description]);
        console.log(req.body);
        res.json(newtodo.rows);
    }catch(err){
        console.log(err.message);
    }
})

//update

app.put('/todos/:id',async (req,res)=>{
    try{
       const {id} = req.params;
       const{description} = req.body;
       const updatedtodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2',[description,id]);
       res.json('todo is updated')
    }catch(err){
        console.log(err);
    }

});
//delete
app.delete('/todos/delete/:id',async (req,res)=>{
    try{
     const{id} = req.params;
     const deletetodo = await pool.query('DELETE FROM todo WHERE todo_id = $1',[id]);
     res.json('deleted')
    }catch(err){
        console.log('error');
    }
})


app.listen(3002,()=>{
    console.log('server is listening');
})