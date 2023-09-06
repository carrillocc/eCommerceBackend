const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const { users } = require("../../models");

router.post("/", async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const user = await users.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const usersList = await users.findAll();

    return res.json(usersList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//get by id
router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await users.findOne({
      where: { uuid },
      // include: "posts",
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await users.findOne({
      where: { uuid },
    });
    await user.destroy();
    return res.json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
module.exports = router;
