const http = require('http');
const path = require('path');
const fs = require('fs');
let details = {
  name:'',
  age:''
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  details = `${name}`
   readline.close()
})


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(`name:${details}`)

})

const PORT = 3000;
server.listen(PORT,()=>{
  console.log('running');
});