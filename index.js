const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

 app.get("/", async (req, res) => {
      res.json({ message: "NICE!" });
    });
    app.listen(3000, () => {
      console.log("Server is running.");
      console.log("Use our API on port: http://localhost:3000");
    });
