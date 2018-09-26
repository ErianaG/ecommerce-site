//	cd mongo/bin
// ./mongod –dbpath ~/mongo-data 

const mongoose = require('mongoose'); //npm install --save mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Products', { useNewUrlParser: true });

module.exports = {
    mongoose
};