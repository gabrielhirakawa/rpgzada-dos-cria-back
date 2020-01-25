const express = require("express");
const CharacterController = require("./controllers/CharacterController");
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "servidor runfando!!!" });
});

//user
routes.post("/user", UserController.store);
routes.post("/sessions", SessionController.store);

//itens


//ficha
routes.post("/ficha", CharacterController.store);
routes.put("/ficha/:id", CharacterController.update);
routes.delete("/ficha/:id", CharacterController.delete);
routes.get("/ficha", CharacterController.index);

module.exports = routes;
