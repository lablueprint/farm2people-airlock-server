const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.static('farm2people-web-app/build'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));