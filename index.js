require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata={
  "login": "BaraiyaUmang",
  "id": 191430677,
  "node_id": "U_kgDOC2kAFQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/191430677?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/BaraiyaUmang",
  "html_url": "https://github.com/BaraiyaUmang",
  "followers_url": "https://api.github.com/users/BaraiyaUmang/followers",
  "following_url": "https://api.github.com/users/BaraiyaUmang/following{/other_user}",
  "gists_url": "https://api.github.com/users/BaraiyaUmang/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/BaraiyaUmang/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/BaraiyaUmang/subscriptions",
  "organizations_url": "https://api.github.com/users/BaraiyaUmang/orgs",
  "repos_url": "https://api.github.com/users/BaraiyaUmang/repos",
  "events_url": "https://api.github.com/users/BaraiyaUmang/events{/privacy}",
  "received_events_url": "https://api.github.com/users/BaraiyaUmang/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-12-12T03:46:53Z",
  "updated_at": "2024-12-31T14:22:48Z"
}

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

app.get("/github",(req,res)=>{
  res.json(githubdata)
})

app.listen(process.env.PORT,  () => {
  console.log(`Example app listening on port ${port}`)
})

