const express = require("express");
const router = express.Router();
const { renderHome, renderTour1, renderTour2, renderTour3,renderTour4, renderTour5 } = require("../controllers/routeController");

router.get("/", renderHome);
router.get("/thimphuTshechu", renderTour1);
router.get("/paroTaktshang", renderTour2);
router.get("/centralBhutan", renderTour3);
router.get("/haaValley", renderTour4);
router.get("/blackNeckedCraneFestival", renderTour5);

module.exports = router;
