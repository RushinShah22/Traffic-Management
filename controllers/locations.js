const locationModel = require("./../models/locations");

module.exports.addLocation = async (req, res) => {
  try {
    const coordinates = {
      type: "Point",
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)],
    };
    const loc = {
      name: req.body.name,
      location: coordinates,
    };

    const location = await locationModel.create(loc);
    res.status(201).json({
      status: "success",
      location,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
