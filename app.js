const express = require("express");
const cors = require("cors");
const locationRoute = require("./routes/locations");
const roadsRouter = require("./routes/roads");
const shortestPathRouter = require("./routes/shortestPath");
const trafficUpdateRouter = require("./routes/trafficUpdates");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/locations", locationRoute);
app.use("/roads", roadsRouter);
app.use("/shortest-path", shortestPathRouter);
app.use("/traffic-update", trafficUpdateRouter);

module.exports = app;
