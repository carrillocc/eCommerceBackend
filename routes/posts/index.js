const express = require("express");
const router = express.Router();
const { users, posts } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

router.post("/", async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    if (req.headers.authorization) {
      const tokenParts = req.headers.authorization.split(" ");
      const token = tokenParts[tokenParts.length - 1]; // Extract the token
      jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
        if (error) {
          // Handle token verification error
          return res.status(401).json({ error: "Invalid token" });
        } // Token is valid, you can access the decoded payload

        const user = await users.findOne({ where: { uuid: userUuid } });
        const post = await posts.create({ body, userId: user.id });
        return res.json(post);
      });
    } else {
      return res.status(401).json({ error: "Token needed" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const postsList = await posts.scope("includeUser").findAll();
    return res.json(postsList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const post = await posts.scope("includeUser").findOne({
      where: { uuid },
    });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const post = await posts.findOne({
      where: { uuid },
    });
    await post.destroy();
    return res.json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
