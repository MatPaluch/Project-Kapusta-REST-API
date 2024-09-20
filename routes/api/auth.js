const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth");

router.post("/register", authControllers.register);

router.get("/login", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/login", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/logout", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
