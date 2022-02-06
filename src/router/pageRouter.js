import express from "express";

const pageRouter = express.Router();

pageRouter.get("/send", (req, res) => {
  res.render("send");
  res.redirect(
    `/send?text=${req.body.text}&phone_number=${req.body.phone_number}`
  );
});

export default pageRouter;
