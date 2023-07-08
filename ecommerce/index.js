// We can use express as shown as below
import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.json({ message: `You are using ECOMMERCE Service! PORT:${port}` });
});

app.get("/ecommerce", (req, res) => {
  res.json({ message: `You Hit /ecommerce api of Ecommerce Service PORT:${port}` });
});

app.listen(port, () => {
  console.log(`ECOMMERCE app listening at http://localhost:${port}`);
});
