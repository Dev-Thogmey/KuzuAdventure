const express = require("express");
const path = require("path");
const publicRoute = require("./routes/publicRoute");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/", publicRoute);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
