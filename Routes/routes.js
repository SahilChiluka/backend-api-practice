const express = require("express");

const Router = express.Router();

const {homePage, insertData, updateData, deleteData} = require("../Controllers/controllers");

Router.route("/").get(homePage);
Router.route("/insert").post(insertData);
Router.route("/update/:id").patch(updateData);
Router.route("/delete/:id").delete(deleteData);

module.exports = Router;