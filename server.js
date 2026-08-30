const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(__dirname));

app.get("/api/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`knowledge-graph listening on ${PORT}`));
