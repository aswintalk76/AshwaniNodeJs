const express = require("express");
const { testAuthController } = require("../controllers/authContoller");
//router object
const router = express.Router();

//Start a code

router.get("/test", testAuthController);

//End a code

module.exports = router;
