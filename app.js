const express = require("express");
const app = express();
app.use(express.json());

const { sequelize, products } = require("./models");

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

//Users--------------
app.use("/users", usersRouter);

//Posts---------------------
app.use("/posts", postsRouter);

//Products------------
app.use("/products", productsRouter);

//Orders------------
app.use("/orders", ordersRouter);

//Listen
app.listen({ port: 5001 }, async () => {
  console.log("Server up on http://localhost:5001");
  await sequelize.authenticate();
  console.log("Database Connected");
});
