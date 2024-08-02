const express = require("express");
const shortestPathController = require("./../controllers/shortestPath");

const Router = express.Router();

Router.route("/").get(shortestPathController.getShortestPath);

module.exports = Router;
