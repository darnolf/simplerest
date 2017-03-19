// DATA SOURC: https://jsonplaceholder.typicode.com/users

var mongoose = require('mongoose');

// users Schema

var usersSchema = mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    username: {type: String},
    email: {type: String},
    address: {
        street: {type: String},
        suite: {type: String},
        city: {type: String},
        zipcode: {type: String},
        geo: {
            lat: {type: String},
            lng: {type: String}           
        }
    },
    phone: {type: String},
    website: {type: String},
    company: {
        name: {type: String},
        catchPhrase: {type: String},    
        bs: {type: String}
    },
    create_date: {
        type: Date,
        default: Date.now
    }   
});

var User = module.exports = mongoose.model('users', usersSchema)

// Get users

module.exports.getUsers = function(callback, limit) {

    User.find(callback).limit(limit);
}

// Get user

module.exports.getUserById = function(id, callback) {

    var hide = { 
        __v: false,
        _id: false,
        address: false,
        company: false,
        create_date: false
    };

    //User.findById(id, callback);
     User.find({'id': id}, hide, callback);
}

// Add user

module.exports.addUser = function(user, callback) {
    User.create(user, callback);
};

// Update User

module.exports.updateUser = function(id, user, options, callback) {
    var query = {_id: id};
    var update = {
        title: user.name,
        genre: user.genre,
        description: user.description,
        author: user.author,
        publisher: user.publisher,
        pages: user.pages,
        image_url: user.image_url,
        buy_url: user.buy_url
    }
    User.findOneAndUpdate(query, update, options, callback);
};

// Delete user

module.exports.removeUser = function(id, callback) {
    var query = {_id: id};
    User.remove(query, callback);
};