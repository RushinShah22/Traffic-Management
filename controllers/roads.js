const roadModel = require("./../models/roads");

module.exports.addRoad = async (req, res) => {
  try {
    const newRoad = {
      startLoc: req.body.start_location_id,
      endLoc: req.body.end_location_id,
      distance: req.body.distance,
      trafficCondition: req.body.traffic_condition,
    };
    const road = await roadModel.create(newRoad);
    res.status(201).json({
      status: "success",
      data: road,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
