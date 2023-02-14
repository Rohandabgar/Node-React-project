const Lift = require("../model/liftModel");

exports.getallPassenger = async (req, res) => {
  let queryObj = { ...req.query };
  const exeption = ["sort", "page", "limit", "fields"];
  exeption.forEach((el) => delete queryObj[el]);

  let query = Lift.find(queryObj);

  const lift = await query;
  res.status(200).json({
    status: "success",
    length: lift.length,
    data: {
      liftData: lift,
    },
  });
};

exports.creatLiftData = async (req, res) => {
  console.log(req.body);
  const lift = await Lift.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      liftData: lift,
    },
  });
};
exports.updateLift = async (req, res) => {
  const lift = await Lift.findByIdAndUpdate(req.params, req.body, {
    runValidators: true,
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      listData: lift,
    },
  });
};
exports.deleteLift = async (req, res) => {
  const lift = await Lift.findByIdAndDelete(req.params);

  res.status(200).json({
    status: "success",
    data: null,
  });
};
