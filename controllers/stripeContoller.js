exports.testStripeController = async (req, res) => {
  return res.status(201).send({
    success: true,
    message: "test Stripe Controller working",
  });
};

//Workig on plans module start
exports.createPlanStripeController = async (req, res) => {
  return res.status(201).send({
    success: true,
    message: "create-plan Stripe Controller working",
  });
};

exports.updatePlanStripeController = async (req, res) => {
  return res.status(201).send({
    success: true,
    message: "create-plan Stripe Controller working",
  });
};

//Workig on plans module End