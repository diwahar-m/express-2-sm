const express = require('express'); 

const app = express(); 

//  
app.set('view engine', 'ejs') 

// 
app.get('/', (req, res)=> {
    res.send('home page')
}) 
// 
app.post('/api/data',(req, res)=> {
    res.json({
        message: 'Data received', 
        data: req.body,
    })
})
// 
app.use((err, req, res, next)=> {
    console.log(err); 
    res.status(500).send('something went wrong');
})
//
const port = 3000; 
app.listen(port, ()=> {
    console.log(`Server, ${port}`)
})

