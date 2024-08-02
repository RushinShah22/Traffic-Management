const express = require("express");
const locationController = require("./../controllers/locations");

const Router = express.Router();

Router.route("/").post(locationController.addLocation);

module.exports = Router;
