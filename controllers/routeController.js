const path = require("path");

exports.renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

exports.renderTour1 = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tour1.html"));
};
exports.renderTour2 = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tour2.html"));
};
exports.renderTour3 = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tour3.html"));
};
exports.renderTour4 = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tour4.html"));
};
exports.renderTour5 = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tour5.html"));
};

