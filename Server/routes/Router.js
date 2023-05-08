const express = require("express");
const { saveduser } = require("../Controllers/saveduser");
const { addprofile } = require("../Controllers/addprofile");
const { addpost } = require("../Controllers/addpost");
const { currentuser } = require("../Controllers/currentuser");
const { acceptrequest } = require("../Controllers/acceptrequest");
const router = express.Router();

router.post("/saveduser", saveduser);
router.post("/add", addprofile);
router.post("/addpost", addpost);
router.get("/currentuser",currentuser)
router.get("/acceptrequest",acceptrequest)

module.exports = router;
