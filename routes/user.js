const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User Test Is Successfull");
});

module.exports = router;
