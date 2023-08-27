exports.testAuthController = async (req, res) => {
  return res.status(201).send({
    success: true,
    message: "test Auth Controller working",
  });
};
