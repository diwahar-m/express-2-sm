const express = require('express'); 
const app = express();

const myMiddleware = (req, res, next)=> {
    console.log('THis is middleware'); 
    next();
}

app.use(myMiddleware) 

app.get('/', (req, res)=> {
    res.send('Home page')
})
app.get('/about', (req, res)=> {
    res.send('About Page')
})

app.listen(3000, ()=> {
    console.log(`Server on 3000`)
})