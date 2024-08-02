const roadModel = require("./../models/roads");
const Graph = require("node-dijkstra");

async function createGraphInit() {
  try {
    const roads = await roadModel.find({});

    let adjList = {};

    roads.forEach((road) => {
      let { startLoc, endLoc, distance, trafficCondition } = road;
      if (trafficCondition == "moderate") {
        distance += 5;
      }
      if (trafficCondition == "high") {
        distance += 10;
      }
      if (!adjList[startLoc]) {
        adjList[startLoc] = {};
      }
      if (!adjList[endLoc]) {
        adjList[endLoc] = {};
      }
      adjList[startLoc][endLoc] = distance;
      adjList[endLoc][startLoc] = distance;
    });

    let graph = new Graph(adjList);
    console.log(graph);
    global.graph = graph;
  } catch (err) {
    console.error("Error creating initial graph:", err);
  }
}

module.exports = createGraphInit;
