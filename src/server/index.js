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
      console.log(result);
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
      name: req.body.name,
      singer: req.body.singer,
      cover: req.body.cover,
      musicSrc: req.body.musicSrc
    }, 
    function (err, result) {
      if (err) throw err;
      req.json(result);
      db.close();
    });
  });
});