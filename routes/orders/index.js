const express = require("express");
const router = express.Router();
const { users, products, orders } = require("../../models");
//Orders-----------------------

// router.post("/", async (req,res)=>{

// })
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

module.exports = router;
