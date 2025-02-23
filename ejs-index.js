const express = require('express'); 
const path = require('path');

const app = express(); 

// set the view engine 
app.set('view engine', 'ejs');

app.set('views', path.join(__directory, "views"))

const prioducts = [
    {
        id: 1, 
        name: 'product-1'
    },
    {
        id: 2, 
        name: 'product-2'
    },
    {
        id: 3, 
        name: 'product-3'
    },
    {
        id: 4, 
        name: 'product-4'
    },
]

app.get('/', (req, res)=> {
    res.render('home', {title: 'Home', products: products})
})

app.get('/about', (req, res)=> {
    res.render('about', {title: 'About')
}) 


const por = 3000; 

app.listen(3000, () => {
    console.log(`Server running on ${port}`)
})