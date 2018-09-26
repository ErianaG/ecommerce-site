const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productImages: {
        type: Object,
        required: true
    },
    availability: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product
};