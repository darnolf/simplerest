var mongoose = require('mongoose');

// books Schema

var booksSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    },
    pages: {
        type: String,
    },
    image_url: {
        type: String,
    },
    buy_url: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    }   
});

var Book = module.exports = mongoose.model('books', booksSchema)

// Get books

module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

// Get book

module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

// Add book

module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
};

// Update Book

module.exports.updateBook = function(id, book, options, callback) {
    var query = {_id: id};
    var update = {
        title: book.name,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
};

// Delete book

module.exports.removeBook = function(id, callback) {
    var query = {_id: id};
    Book.remove(query, callback);
};