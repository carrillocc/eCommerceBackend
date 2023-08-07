const express = require("express");

const { sequelize, Users } = require("./models");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { first_name, last_name, email, role } = req.body;
  try {
    const user = await Users.create({ first_name, last_name, email, role });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database Connected");
});
