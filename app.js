var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(cors());


app.use(express.static(__dirname+'/client'));

// This is to kick in middleware for body parser
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

Genre = require('./models/genres');
Book = require('./models/book');
Product = require('./models/products');
User = require('./models/users');

// Connect to mongoose

mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Please use API');
});

app.get('/api/genres', function(req, res ){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    })   
});

app.post('/api/genres', function(req, res ){
    var genre = req.body;
    Genre.addGenre(genre, function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });  
});

app.put('/api/genres/:_id', function(req, res ){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id,genre, {}, function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });   
});

app.delete('/api/genres/:_id', function(req, res ){
    var id = req.params._id;
    Genre.removeGenre(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });   
});

// BOOKS


app.get('/api/books', function(req, res ){
    Book.getBooks(function(err,books){
        if(err){
            throw err;
        }
        res.json(books);
    });   
});

//58c1c94fc4d4916750b27259
 
app.get('/api/books/:_id', function(req, res ){
    Book.getBookById(req.params._id, function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    })   
});

app.post('/api/books', function(req, res ){
    var book = req.body;
    Book.addBook(book, function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    })   
});

app.put('/api/books/:_id', function(req, res ){
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id,book, {}, function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    })   
});

app.delete('/api/books/:_id', function(req, res ){
    var id = req.params._id;
    Book.removeBook(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });   
});

// PRODUCTS


app.get('/api/products', function(req, res ){
    Product.getProducts(function(err,products){
        if(err){
            throw err;
        }
        res.json(products);
    });   
});

//58c1c94fc4d4916750b27259
 
app.get('/api/products/:_id', function(req, res ){
    Product.getProductById(req.params._id, function(err,product){
        if(err){
            throw err;
        }
        res.json(product);
    })   
});

app.post('/api/products', function(req, res ){
    var product = req.body;
    Product.addProduct(product, function(err,product){
        if(err){
            throw err;
        }
        res.json(product);
    })   
});

app.put('/api/products/:_id', function(req, res ){
    var id = req.params._id;
    var product = req.body;
    Product.updateProduct(id,product, {}, function(err,product){
        if(err){
            throw err;
        }
        res.json(product);
    })   
});

app.delete('/api/products/:_id', function(req, res ){
    var id = req.params._id;
    Product.removeProduct(id, function(err, product){
        if(err){
            throw err;
        }
        res.json(product);
    });   
});

// USERS

app.get('/api/users/', function(req, res ){
    User.getUsers(function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
    });   
});

app.get('/api/users/:_id', function(req, res ){
    User.getUserById(req.params._id, function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    })   
});


app.post('/api/users', function(req, res ){
    var user = req.body;
    User.addUser(user, function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    })   
});






app.listen(1000);
console.log('Running on port 1000');