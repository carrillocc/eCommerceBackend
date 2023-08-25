const express = require("express");
const app = express();
app.use(express.json());

const { sequelize, products } = require("./models");

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

//Users--------------
app.use("/users", usersRouter);

//Posts---------------------
app.use("/posts", postsRouter);

//Products------------

app.post("/products", async (req, res) => {
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

app.get("/products", async (req, res) => {
  try {
    const productList = await products.findAll();
    return res.json(productList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/products/:uuid", async (req, res) => {
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

app.delete("/products/:uuid", async (req, res) => {
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

//Listen

app.listen({ port: 5001 }, async () => {
  console.log("Server up on http://localhost:5001");
  await sequelize.authenticate();
  console.log("Database Connected");
});
