const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/CRUDAPP", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection");
    })
    .catch((e) => {
      console.log("error");
    });
};

module.exports = connection;
