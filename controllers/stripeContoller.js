exports.testStripeController = async (req, res) => {
  return res.status(201).send({
    success: true,
    message: "test Stripe Controller working",
  });
};
