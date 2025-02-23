const express = require('express'); 
const app = express(); 

// rootroute 
app.get('/', (req, res)=> {
    res.send('Home Page')
})
//
app.get('/products', (req, res)=> {
    const products = [
        {
            id: 1, 
            name: 'product-1'
        }
    ]
    res.json(products);
})
// single product 
app.get('/products/:id', (req, res)=> {
    let productId = parseInt(req.params.id); 
    const products = [
        {
            id: 1, 
            name: 'product-1'
        }
    ]
    const getSingleProduct = products.find(product => product.id === productId);
    if(getSingleProduct){
        res.json(getSingleProduct)
    } else {
        res.status(404).send('Product is not found')
    }
})

const port = 3000; 
app.listen(port, ()=> {
    console.log(`Server, ${port}`)
})