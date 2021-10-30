require('dotenv').config();
const fs = require('fs');
const express = require("express");

const app = express();
app.use(express.json());

const { MongoClient } = require("mongodb");
const mongo = require("mongodb");
const uri = `mongodb+srv://default:${process.env.mongoDB}@no-treble.sqmlw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// test database connection and list all collections (databases)
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases: ");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await listDatabases(client);
  }
  catch (err) {
    console.error(err);
  }
  finally {
    await client.close();
  }
}

main().catch(console.error);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server listening on port ${process.env.PORT || 8080}!`)
);

// retrieve favourite songs from database
app.get("/favourites", (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    const collection = db.db('music').collection('favourite')
    if (err) throw err;
    const dbo = db.db('music');
    collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result)
      db.close();
    });
  });
});

// add new data to favourite song database
app.post("/favourite", (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    const collection = db.db('music').collection('favourite')
    if (err) throw err;
    collection.insertOne({
      name: req.body.name,
      singer: req.body.singer,
      cover: req.body.cover,
      musicSrc: req.body.musicSrc
    }, 
    function (err, result) {
      if (err) throw err;
      db.close();
    });
  });
});

// add delete route from favourite song db
app.post("/delete/:id", (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    const collection = db.db('music').collection('favourite')
    if (err) throw err;
    const query = { _id: new mongo.ObjectId(req.params.id) };
    collection.deleteOne(query,
      function(err, result) {
        if (err) throw err;
        db.close();
      });
  });
});

// reseed data from mongoDB/dummyData.json
app.get("/reset", (req, res) => {
  let seedData;
  fs.readFile('./src/mongoDB/dummyData.json', 'utf8', (err, data) => {
    if (err) throw err;
    seedData = data;
  });
  MongoClient.connect(uri, (err, db) => {
    const collection = db.db('music').collection('favourite')
    if (err) throw err;
    collection.deleteMany(function(err, result) {
      if (err) throw err;
    });
    collection.insertMany(JSON.parse(seedData),
      function(err, result) {
        if (err) throw err;
        db.close();
      });
  });

  setTimeout(function(){
    res.redirect('/favourites');
  }, 1000);
});