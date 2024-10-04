const express = require("express");
const router = express.Router();
const {
  getAllForms,
  getFormsById,
  createForms,
  updateFormsById,
  deleteFormsById,
} = require("../controller/formsController");

//get all stash
router.get("/", getAllForms);
//get stash by id
router.get("/:id", getFormsById);
//create stash
router.post("/", createForms);
//updated stash by id
router.put("/:id", updateFormsById);
//delete stash by id
router.delete("/:id", deleteFormsById);

module.exports = router;
