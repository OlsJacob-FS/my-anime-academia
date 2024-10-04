const Stashs = require("../models/Stash");

const getAllStash = async (req, res) => {
  try {
    const stash = await Stashs.find({});
    res.status(200).json({
      data: stash,
      success: true,
      message: `${req.method} - Request made to stash endpoint`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getStashById = async (req, res) => {
  try {
    const stash = await Stashs.findById(id);
    res.status(200).json({
      data: stash,
      success: true,
      method: `${req.method} - Request made to Stash endpoint`,
    });
  } catch (error) {
    res.status(400).json(error, "ID - Not Found");
  }
};

const createStash = async (req, res) => {
  const { stashs } = req.body;
  console.log(stashs);
  try {
    const newStash = await Stashs.create(stashs);

    console.log("data>>>", newStash);
    res.status(200).json({
      data: newStash,
      success: true,
      message: `${req.method} - Request Made to Stash endpoint`,
    });
  } catch (error) {
    // if (error.name === "ValidationError") {
    //   console.error("Error Validating!", error);
    //   res.status(422).json(error);
    // } else {
    //   res.status(400).json("400: Stash already Exsist", error);
    // }
    res.status(400).json(error);
    console.log(error);
  }
};

const updateStashById = async (req, res) => {
  const { id } = req.params;
  try {
    const stash = await Stashs.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      data: stash,
      success: true,
      message: `${req.method} - Request Made to Stash endpoint`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteStashById = async (req, res) => {
  const { id } = req.params;
  try {
    const stash = await Stashs.findByIdAndDelete(id);
    if (stash === null) {
      res.status(404).json("Not Found");
    } else {
      res.status(200).json({
        data: stash,
        success: true,
        message: `${req.method} - Request Made to Stash endpoint`,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllStash,
  getStashById,
  createStash,
  updateStashById,
  deleteStashById,
};
