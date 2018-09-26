//npm init

const express = require('express');
const bodyParser = require('body-parser');
var { mongoose } = require('./mongoose');
const cors = require('cors');

const { Product } = require('./modules/Product');

console.log('SERVER STARTED')
const app = express();

app.use(bodyParser.json());
app.use(cors());




 
// GET

app.get('/products', (req, res) => {
    Product.find().then((product) => {
        if(product) {
            res.send({product});
        } else {
            res.status(404).send("Unable to find products")
        }
    }).catch(err => res.status(400).send(err));
})

// GET with ID

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    Product.findById(id).then(product => {
        if (product) {
            res.send(product);
        } else {
            res.status(404).send('Unable to find product with that ID');
        }
    }).catch(err => res.status(400).send(err));
})

// DELETE

// app.delete('/products/:id', (req, res) => {
//     const id = req.params.id;
//     Product.findByIdAndDelete(id).then(product => {
//         if (product) {
//             return res.send(product);
//         } else {
//             return res.status(404).send('Unable to find product with that ID');
//         }
//     }).catch(err => res.status(400).send(err));
// })

// POST

app.post('/products', (req, res) => {
    const {productName, description, price, productType, productCategory, productImages, availability} = req.body;

    var product = new Product ( {
        productName,
        description,
        price,
        productType,
        productCategory,
        productImages,
        availability
    });

    product.save().then(product => {
        res.send(product);
    }).catch(err => res.status(400).send(err.message));
});

// // PUT

// app.put('/products/:id', (req, res) => {
//     const id = req.params.id;
//     const {productName, description, price, productType, productCategory, productImages, availability} = req.body;
//     Product.findById(id).then(product => {
//         if (!product) {
//             return res.status(404).send('Unable to find product with that ID');
//         }
//         if(productName) {
//             product.set({
//                 productName
//             })
//         }
//         if (description) {
//             product.set({
//                 description
//             })
//         }
//         if (price) {
//             product.set({
//                 price
//             })
//         }
//         if (productType) {
//             product.set({
//                 productType
//             })
//         }
//         if (productCategory) {
//             product.set({
//                 productCategory
//             })
//         }
//         if (productImages) {
//             product.set({
//                 productImages
//             })
//         }
//         if (availability) {
//             product.set({
//                 availability
//             })
//         }
//         product.save().then(updatedProduct => res.send(updatedProduct));
//     }).catch(err => res.status(400).send(err));
// })


app.listen(3005);