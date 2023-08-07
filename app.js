const express = require("express");

const { sequelize, users } = require("./models");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { first_name, last_name, email, role } = req.body;
  try {
    const user = await users.create({ first_name, last_name, email, role });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const usersList = await users.findAll();

    return res.json(usersList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await users.findOne({
      where: { uuid },
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database Connected");
});
