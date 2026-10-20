const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const replicaApp=process.env.APP_NAME

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
    console.log("App is serverd by Aayush")
})

app.listen(port,()=>{
    console.log(`node app is listening on port ${port}`)
})