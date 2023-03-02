// PokeAPI Link
// https://pokeapi.co/

// Documentation
// https://pokeapi.co/docs/v2

const axios = require("axios");

async function makeRequest() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/pikachu", // API link
  };

  let res = await axios(config);

  console.log("Response Data");
  console.log(res.data);
  console.log("--------------------");
  console.log("Extracted info from response data:");
  console.log("--------------------");
  console.log(`Pokemon Name: ${res.data.name}`);
  console.log(`Pokemon Order: ${res.data.order}`);
  console.log(`Pokemon Species: ${res.data.species.name}`);
  console.log(`Pokemon Species URL: ${res.data.species.url}`);
}
const express = require('express')
const app = express()


app.get('/example1',(req,res,next)=>{
res.send('hi')
    next()
},(req,res)=>{
res.send('hello from b ')
})
app.get('/example2',(req,res,next)=>{
    res.send('hello example2')
    next()
},(req,res)=>{
    res.send("example 2.2")
})
app.get('/', function (req, res) {
  res.send(makeRequest())
})

console.log('app lestin on port 3000 ')
console.log('https://localhost/3000 ')
app.listen(3500)



