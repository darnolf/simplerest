var mongoose = require('mongoose');

// products Schema

var productsSchema = mongoose.Schema({
    productId: {
        type: Number
    },
    productName: {
        type: String
    },
    productCode: {
        type: String,
    },
    releaseDate: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    },
    starRating: {
        type: Number,
    },
    imageUrl: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    }     
});

var Book = module.exports = mongoose.model('products', productsSchema)

// Get products

module.exports.getProducts = function(callback, limit) {
    Product.find(callback).limit(limit);
}

// Get product

module.exports.getProductById = function(id, callback) {
    Product.findById(id, callback);
}

// Add product

module.exports.addProduct = function(product, callback) {
    Product.create(product, callback);
};

// Update Product

module.exports.updateProduct = function(id, product, options, callback) {
    var query = {_id: id};
    var update = {
        productName: product.productName,
        productCode: product.productCode,
        releaseDate: product.releaseDate,
        publisher: product.publisher,
        price: product.price,
        starRating: product.starRating,
        imageUrl: product.imageUrl
    }
    Product.findOneAndUpdate(query, update, options, callback);
};

// Delete product

module.exports.removeProduct = function(id, callback) {
    var query = {_id: id};
    Product.remove(query, callback);
};