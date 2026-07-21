const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://yashagg2612_db_user:d56QbHbSOJvkcOjz@ac-bhm4wxd-shard-00-00.sc3mg9j.mongodb.net:27017,ac-bhm4wxd-shard-00-01.sc3mg9j.mongodb.net:27017,ac-bhm4wxd-shard-00-02.sc3mg9j.mongodb.net:27017/devTinder?ssl=true&replicaSet=atlas-zen983-shard-0&authSource=admin&retryWrites=true&w=majority&appName=backend-prep/devTinder"
  );
};

module.exports = connectDB;