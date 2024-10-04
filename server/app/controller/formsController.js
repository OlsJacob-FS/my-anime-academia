const Form = require("../models/Forms");

const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find({});
    res.status(200).json({
      data: forms,
      success: true,
      message: `${req.method} - Request made to stash endpoint`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getFormsById = async (req, res) => {
  try {
    const forms = await Form.findById(id);
    res.status(200).json({
      data: forms,
      success: true,
      method: `${req.method} - Request made to Stash endpoint`,
    });
  } catch (error) {
    res.status(400).json(error, "ID - Not Found");
  }
};

const createForms = async (req, res) => {
  const { form } = req.body;
  console.log(form);
  try {
    const newForm = await Form.create(form);

    console.log("data>>>", newForm);
    res.status(200).json({
      data: newForm,
      success: true,
      message: `${req.method} - Request Made to Form endpoint`,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Error Validating!", error);
      res.status(422).json(error);
    } else {
      console.error(error);
      res.status(400).json("400: Form already Exsist");
    }
  }
};

const updateFormsById = async (req, res) => {
  const { id } = req.params;
  try {
    const forms = await Form.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      data: forms,
      success: true,
      message: `${req.method} - Request Made to Stash endpoint`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteFormsById = async (req, res) => {
  const { id } = req.params;
  try {
    const forms = await Form.findByIdAndDelete(id);
    if (forms === null) {
      res.status(404).json("Not Found");
    } else {
      res.status(200).json({
        data: forms,
        success: true,
        message: `${req.method} - Request Made to Stash endpoint`,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllForms,
  getFormsById,
  createForms,
  updateFormsById,
  deleteFormsById,
};
