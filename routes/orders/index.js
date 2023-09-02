const express = require("express");
const router = express.Router();
const { users, products, orders } = require("../../models");

router.post("/", async (req, res) => {
  const { userId, productId, quantity, total } = req.body;

  try {
    const user = await users.findOne({ where: { uuid: userId } });
    const product = await products.findOne({ where: { uuid: productId } });

    const order = await orders.create({
      userId: user.id,
      productId: product.id,
      quantity,
      total,
    });

    return res.json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const ordersList = await orders.scope("includeProducts").findAll();
    return res.json(ordersList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
