const express = require("express");
const router = express.Router();
const {
  getAllStash,
  getStashById,
  createStash,
  updateStashById,
  deleteStashById,
} = require("../controller/stashController");

//get all stash
router.get("/", getAllStash);
//get stash by id
router.get("/:id", getStashById);
//create stash
router.post("/", createStash);
//updated stash by id
router.put("/:id", updateStashById);
//delete stash by id
router.delete("/:id", deleteStashById);

module.exports = router;
