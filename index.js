require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("i am future backend developer")
})

app.get("/login",(req,res)=>{
    res.send("<h1> <i>login page,</i></h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2 align=center>welcome to backend world</h2>")
})


app.get("/instagram",(req,res)=>{
  res.send("<h1 align=right>QUIT INSTAGRAM IT IS BAD </h1>")
})

app.listen(process.env.PORT,  () => {
  console.log(`Example app listening on port ${port}`)
})

