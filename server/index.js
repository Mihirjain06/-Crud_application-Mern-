const express = require("express");
const cors = require("cors");
const connection = require("./database/db");
const { mongoconnection } = require("./schema/user-schema");

const app = express();

connection();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/adduser", (req, res) => {
  mongoconnection
    .find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching data");
    });
});
//create user
app.post("/adduser", (req, res) => {
  const { name, username, email, phonenumber } = req.body;

  const newUser = new mongoconnection({
    name: name,
    username: username,
    email: email,
    phonenumber: phonenumber,
  });

  newUser
    .save()
    .then(() => {
      res.send(newUser); // Send the newly added user as a response
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error inserting data");
    });
});

//ReadUser
app.get("/alluser", (req, res) => {
  mongoconnection
    .find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching data");
    });
});

app.get("/:id", (req, res) => {
  mongoconnection
    .find({ _id: req.params.id })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching data");
    });
});

//update User
app.put("/:id", (req, res) => {
  const { name, username, email, phonenumber } = req.body;
  mongoconnection
    .findByIdAndUpdate(
      req.params.id,
      { name, username, email, phonenumber },
      { new: true }
    )
    .then((updatedUser) => {
      res.send(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating user data");
    });
});

//Delete User  
app.delete("/:id", (req, res) => {
    const { name, username, email, phonenumber } = req.body;
    mongoconnection
      .findOneAndDelete(
        req.params.id,
        { name, username, email, phonenumber },
        { new: true }
      )
      .then((updatedUser) => {
        res.send(updatedUser);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error deleting user data");
      });
  });
  
app.listen(5000, () => {
  console.log("Server is running successfully");
});
