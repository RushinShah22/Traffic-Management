const roadModel = require("./../models/roads");
const Graph = require("node-dijkstra");

async function createInitGraph() {
  try {
    const roads = await roadModel.find({});

    const adjList = {};

    roads.forEach((road) => {
      const { startNode, endNode, distance, trafficCondition } = road;
      if (trafficCondition == "moderate") {
        distance += 5;
      }
      if (trafficCondition == "high") {
        distance += 10;
      }
      if (!adjList[startNode]) {
        adjList[startNode] = {};
      }
      adjList[startNode][endNode] = distance;
    });

    const graph = new Graph(adjList);
    return graph;
  } catch (err) {
    console.error("Error creating initial graph:", err);
  }
}

module.exports = createGraphInit();
