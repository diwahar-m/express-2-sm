const express = require('express');

const app = express(); 

app.get("/", (req, res)=> {
    res.send("HEllo!")
})

const port = 3000; 
app.listen(port, ()=> {
    console.log(`Server, ${port}`)
})