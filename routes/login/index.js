const express = require("express");
const router = express.Router();
const { users } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { JWT_SECRET } = process.env;

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by their email in the database
    const user = await users.findOne({ where: { email } });

    // Check if the user exists and if the password matches
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h", // You can set the token expiration time as per your needs
    });

    // Successful login response
    res.status(200).json({
      message: "Successfully logged in!",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
