const express = require('express'); 
const app = express();
 
const requestTimeStampLogger = (re, res, next)=> {
    const timeStamp = new Date().toISOString(); 
    console.log(`${timeStamp} from ${req.method} to ${req.url}`); 
    next()
} 

app.use(requestTimeStampLogger)

app.get('/', (req, res)=> {
    res.send('Home page')
})
app.get('/about', (req, res)=> {
    res.send('About Page')
})

app.listen(3000, ()=> {
    console.log(`Server on 3000`)
})