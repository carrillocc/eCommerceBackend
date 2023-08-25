const express = require("express");
const router = express.Router();
const { users, posts } = require("../../models");

router.post("/", async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await users.findOne({ where: { uuid: userUuid } });
    const post = await posts.create({ body, userId: user.id });

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
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
    const post = await posts.findOne({
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
