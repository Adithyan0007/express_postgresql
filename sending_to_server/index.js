const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  let details = `${name}`;
  console.log(details);
  readline.close()
})
// http.createServer((req,res)=>{
//     res.write(`<h1>hi</h1>`);
//     res.end();
// }).listen(3000,()=>{
//     console.log('server is running');
// })