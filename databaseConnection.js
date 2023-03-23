const MongoClient = require("mongodb").MongoClient;
const is_qoddi = process.env.IS_QODDI || false;
const qoddiURI =
  "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.6vhyiv3.mongodb.net/?retryWrites=true&w=majority";
const localURI =
  // "mongodb://localhost:27017/?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000";
  "mongodb://127.0.0.1/?authSource=admin&retryWrites=true&w=majority";
if (is_qoddi) {
  var database = new MongoClient(qoddiURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  var database = new MongoClient(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = database;
