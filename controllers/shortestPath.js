module.exports.getShortestPath = async (req, res) => {
  try {
    const path = global.graph.path(
      req.query.start_location_id,
      req.query.end_location_id,
      {
        cost: true,
      }
    );
    res.status(200).json({
      status: "success",
      path,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
