// We can use express as shown as below
import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.json({ message: `You are using AUTH Service! PORT:${port}` });
});
app.get("/auth", (req, res) => {
  res.json({ message: `You Hit /auth api of AUTH Service PORT:${port}` });
});

app.listen(port, () => {
  console.log(`AUTH app listening at http://localhost:${port}`);
});
