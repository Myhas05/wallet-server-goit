const MongoClient = require("mongodb").MongoClient;

const DbClient = {
  db: null
};

// Database Name
const dbName = "costs";

exports.connect = (url, options, done) => {
  if (DbClient.db) return done();

  MongoClient.connect(url, options, (err, database) => {
    if (err) return done(err);

    DbClient.db = database.db(dbName);
    done();
  });
};

exports.get = () => DbClient.db;
