const express = require('express');
const v1Router = require("./v1/routes/index");

const app = express();
const port = 3000;

app.use("/api/v1", v1Router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));