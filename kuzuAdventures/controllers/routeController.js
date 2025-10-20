const path = require("path");

exports.renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

exports.renderTour1 = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tour1.html"));
};

exports.renderContact = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
};
