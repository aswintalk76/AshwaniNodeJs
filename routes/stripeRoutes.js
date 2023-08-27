const express = require("express");
const { testStripeController } = require("../controllers/stripeContoller");
//router object
const router = express.Router();

//Start a code

router.get("/test", testStripeController);

//End a code

module.exports = router;
