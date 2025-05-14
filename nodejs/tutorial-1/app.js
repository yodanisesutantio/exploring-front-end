const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Pokemons = require("./models/pokemons");

// express app
const app = express();
const dbURI =
  "mongodb+srv://yodanise66:NextaR993175@tutorial_1.eeae7ke.mongodb.net/";

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => console.log(err));

// Register view engines
app.set("view engine", "ejs");

// Middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongodb sandbox routes
app.get("/add-pokemon", (req, res) => {
  const pokemons = new Pokemons({
    name: "Bulbasaur",
    description:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
  });

  pokemons
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  //   res.send("<p>Homepage</p>");
  const pokemons = [
    {
      name: "Bulbasaur",
      description:
        "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    },
    {
      name: "Ivysaur",
      description:
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    },
    {
      name: "Venusaur",
      description:
        "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    },
  ];
  res.render("index", { title: "Home", pokemons });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/pokemons/create", (req, res) => {
  res.render("create", { title: "Create New Pokemon" });
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Page" });
});
