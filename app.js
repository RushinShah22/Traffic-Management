const express = require("express");
const locationRoute = require("./routes/locations");
const roadsRouter = require("./routes/roads");
const shortestPathRouter = require("./routes/shortestPath");
const trafficUpdateRouter = require("./routes/trafficUpdates");

const app = express();

app.use("/locations", locationRoute);
app.use("/roads", roadsRouter);
app.use("/shortest-path", shortestPathRouter);
app.use("/traffic-update", trafficUpdateRouter);

module.exports = app;
