*09-03-2017*

# RESTful API From Scratch

* [YouTube Video]('https://youtu.be/eB9Fq9I5ocs')

* [Repository]('https://github.com/bradtraversy/bookstore')

Create *package.json* file

```
npm init
```
Add Dependencies to *package.json*:

```
"dependencies":{
    "express":"*",
    "body-parser":"*",
    "mongoose":"*",
    "cors":"*"   
},
```

Install Dependencies

```
npm install
```

Install ```nodemon``` to avoid restarting server on changes.

```
npm install -g nodemon

nodemon (to run server)
```
## Create Mongodb Database

* Open cmd as administrator and go to mongodb/bin

* type ```mongo``` to enter the mongodb shell, type ```show dbs```

* Create bookstore database and collections:

```
use bookstore

db.createCollection('books')

db.createCollection('genres')

show collections
```
* Add items to collections
```
db.genres.insert({name: 'Suspense'})

db.genres.insert({name: 'Self Help'})

db.genres.find()

db.books.insert({
     title:'The Murder House',
     genre: 'Suspense', 
     description:'No. 7 Ocean Drive is a gorgeous, multi-million-dollar beachfront estate in the Hamptons, where money and privilege know no bounds. But its beautiful gothic exterior hides a horrific past: it was the scene of a series of depraved killings that have never been…",
     author: 'James Patterson',
     publisher: 'Brown and Company',
     pages: '480',
     image_url: 'http://prodimage.images-bn.com/pimages/9781455589913_p0_v1_s192x300.jpg',
     buy_url: 'http://www.barnesandnoble.com/w/the-murder-house-james-patterson/1120873479'
})
```

## Add Routes to API and POSTMAN query

* Once created the api can be tested with POSTMAN.

* URL: http://localhost:3000/api/books, (GET)

* HEADERS: Content-Type = application/json

## Add .gitignore from NPM package

```
npm install gitignore -g
```
then
```
gitignore node
```



