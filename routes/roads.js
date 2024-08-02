const express = require("express");
const roadController = require("./../controllers/roads");

const Router = express.Router();

Router.route("/").post(roadController.addRoad);

module.exports = Router;
