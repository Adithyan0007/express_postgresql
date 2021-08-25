const http = require('http');
const path = require('path');
const fs = require('fs');
let details = {
  name:'',
  age:'',
  profession:''
}
let arr = [];


const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your name? ', (answer) => {
      details.name = answer;
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your age? ', (answer) => {
      details.age =  answer;
      resolve()
    })
  })
}
const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your job? ', (answer) => {
      details.profession =  answer;
      resolve()
    })
  })
}
const main = async () => {
    await question1()
  await question2()
  await question3()
  console.log(details);
   arr.push(details);
  arr = JSON.stringify(arr);
  const fs = require('fs');
  // fs.writeFile('txt.json',arr,err => {
  //   if(err){
  //   console.log('error');
  //   }
  // })
  fs.appendFile('txt.json',`${arr}\n`,err=>{
    if(err){
    console.log(err);
  }})
  const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(`name:${details.name} \n age:${details.age} \n profession:${details.profession}` )

})

const PORT = 3001;
server.listen(PORT,()=>{
  console.log('Data sended successfully','\n');
});

  rl.close()
}

main()
