// We can use express as shown as below
import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.json({ message: `You are using OMS Service! PORT:${port}` });
});

app.get("/oms", (req, res) => {
  res.json({ message: `You Hit /oms api of OMS Service PORT:${port}` });
});

app.listen(port, () => {
  console.log(`OMS app listening at http://localhost:${port}`);
});
