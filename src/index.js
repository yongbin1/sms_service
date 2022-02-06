import express from "express";
import sendRouter from "./router/routers";
import pageRouter from "./router/pageRouter";

const app = express();
const PORT = 4000;

app.set("port", PORT);
app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/send", sendRouter);

app.listen(app.get("port"), () => {
  console.log(`server open port ${app.get("port")}`);
});
