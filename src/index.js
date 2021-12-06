import express from "express";
import send_message from "./sens/sens";

const app = express();
const PORT = 4000;

app.set("port", PORT);
app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/send", (req, res) => {
  const nickname = "보낼사람 이름";
  const phone_number = "보낼사람 전화번호";
  res.setHeader("Content-Type", "application/json");
  try {
    send_message(nickname, phone_number);
    res.send("success");
    console.log("success");
  } catch (err) {
    console.log(err);
  }
});

app.listen(app.get("port"), () => {
  console.log(`server open port ${app.get("port")}`);
});
