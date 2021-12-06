import express from "express";
import { send_message } from "../sens/sens";

const sendRouter = express.Router();

sendRouter.get("/", (req, res, next) => {
  res.send("send");
  const nickname = "고용빈";
  const phone_number = "01057549171";
  res.setHeader("Content-Type", "application/json");

  console.log("post is work");
  try {
    send_message(nickname, phone_number);
    res.send("send message!");
  } catch (err) {
    console.log(err);
  }
});

export default sendRouter;
