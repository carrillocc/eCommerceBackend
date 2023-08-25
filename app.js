const express = require("express");

const { sequelize, users, posts, products, orders } = require("./models");

const app = express();
app.use(express.json());

//Users--------------
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

//Posts---------------------

app.post("/posts", async (req, res) => {
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

app.get("/posts", async (req, res) => {
  try {
    const postsList = await posts.findAll({ include: users });
    return res.json(postsList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/posts/:uuid", async (req, res) => {
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

app.delete("/posts/:uuid", async (req, res) => {
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

//Orders-----------------------
// app.post("/orders", async (req, res) => {
//   const { userId, productId, quantity, total } = req.body;

//   try {
//     const user = await users.findOne({ where: { uuid: userId } });
//     const product = await products.findOne({ where: { uuid: productId } });

//     const order = await orders.create({
//       userId: user.id,
//       productId: product.id,
//       quantity,
//       total,
//     });

//     return res.json(order);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// });
//Listen

app.listen({ port: 5001 }, async () => {
  console.log("Server up on http://localhost:5001");
  await sequelize.authenticate();
  console.log("Database Connected");
});
