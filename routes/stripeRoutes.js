const express = require("express");
const { testStripeController, createPlanStripeController } = require("../controllers/stripeContoller");
//router object
const router = express.Router();

//Start a code

router.get("/test", testStripeController);
//Workig on plans module start
router.get("/create-plan", createPlanStripeController); //post
router.get("/update-plan", createPlanStripeController); //put /update-plan/:planId



//Workig on plans module End

//End a code

module.exports = router;
