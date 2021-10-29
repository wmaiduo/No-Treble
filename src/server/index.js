require('dotenv').config();
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
app.use(express.json());
const uri = `mongodb+srv://default:${process.env.mongoDB}@no-treble.sqmlw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// test mongoDB connection, list all databases
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
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

// retrieve favourite songs from database
app.get("/favourites", (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    if (err) throw err;
    const dbo = db.db('music');
    dbo.collection('favourite').find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result)
      db.close();
    });
  });
});

// add new data to favourite song database
app.post("/favourite", (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    if (err) throw err;
    const dbo = db.db('music');
    dbo.collection('favourite').insertOne({
      name: req.params.name,
      singer: req.params.singer,
      cover: req.params.cover,
      musicSrc: req.params.musicSrc
    }, 
    function (err, result) {
      if (err) throw err;
      db.close();
    });
  });
});
