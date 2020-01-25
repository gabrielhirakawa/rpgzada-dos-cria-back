const mongoose = require("mongoose");

module.exports = {
  mongo() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("database connected");
  }
};
