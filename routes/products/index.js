const express = require("express");
const router = express.Router();
const { products } = require("../../models");

router.post("/", async (req, res) => {
  const {
    productTitle,
    productDescription,
    productPrice,
    productQty,
    productImg,
  } = req.body;

  try {
    const product = await products.create({
      productTitle,
      productDescription,
      productPrice,
      productQty,
      productImg,
    });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const productList = await products.findAll();
    return res.json(productList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const product = await products.findOne({
      where: { uuid },
    });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status.json({ error: "Something went wrong" });
  }
});

router.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const product = await products.findOne({
      where: { uuid },
    });
    await product.destroy();

    return res.json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
