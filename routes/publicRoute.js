const express = require("express");
const router = express.Router();
const { renderHome, renderTour1, renderContact } = require("../controllers/routeController");

router.get("/", renderHome);
router.get("/thimphuTshechu", renderTour1);
router.get("/contact", renderContact);

module.exports = router;
