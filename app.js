let express = require("express")
let app = express()

app.get('/', (req, res)=>{
    res.send("Hello, World")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server listening")
})