const userDetailsModel = require("../models/userDetails.model");

const createUser = async (req, res) => {
  try {
    let createUser = new userDetailsModel({
      name: req.body.name,
      email: req.body.email,
    });

    const response = await createUser.save();
    if (response) {
      res.json({
        statusCode: 200,
        message: "success",
        data: response,
      });
    } else {
      return {
        message: "something wrong",
      };
    }
  } catch (err) {
    res.send(["Error :", err]);
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await userDetailsModel.find();
    if (response) {
      res.json({
        statusCode: 200,
        message: "success",
        data: response,
      });
    } else {
      return {
        message: "Something wrong",
      };
    }
  } catch (err) {
    res.send(["Error :", err]);
  }
};

const updateUser = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      email: req.body.email,
    };
    let id = req.params.id;
    const response = await userDetailsModel.findByIdAndUpdate(id, update);
    if (response) {
      res.json({
        statusCode: 200,
        message: "updated successfully",
      });
    } else {
      return {
        message: "something wrong",
      };
    }
  } catch (err) {
    res.send(["Error :", err]);
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    const response = await userDetailsModel.findByIdAndDelete(id);
    if (response) {
      res.json({
        statusCode: 200,
        message: "deleted successfully",
      });
    } else {
      return {
        message: "something wrong",
      };
    }
  } catch (err) {
    res.send(["Error :", err]);
  }
};

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};
