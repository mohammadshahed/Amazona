import express from 'express';
const app = express();
import data from './data.js';


app.get('/api/products/:id', (req, res)=>{
    const product = data.products.find((x)=>x._id === req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});


app.get('/api/products', (req, res)=>{
    res.send(data.products);
});

app.get('/', (req, res)=>{
    res.send('Server is Ready');
});




const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});