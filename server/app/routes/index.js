const express = require("express");
const router = express.Router();
const stashRoutes = require("./stashRoutes");
const formsRoutes = require("./formsRoutes");

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} = Request Made` });
});

router.use("/stash", stashRoutes);
router.use("/forms", formsRoutes);

module.exports = router;
