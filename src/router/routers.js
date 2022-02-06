import express from "express";
import { send_message } from "../sens/sens";

const sendRouter = express.Router();

let message_text;
let phone_numbers;

sendRouter.post("/data", async (req, res) => {
  const { text, num } = req.body;
  message_text = text;
  phone_numbers = num;
  try {
    send_message(message_text, phone_numbers);
    console.log("success!");
    res.redirect("/send/message");
  } catch (err) {
    console.log(err);
  }
});

sendRouter.get("/message", async (req, res) => {
  res.render("send");
});

export default sendRouter;
