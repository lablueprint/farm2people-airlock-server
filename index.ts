import Airlock from "airlock-server";
import * as express from "express";

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const app = express();
const PORT = 8000;

new Airlock({
  server: app,
  airtableApiKey: [airtableConfig.apiKey],
  airtableBaseId: airtableConfig.baseKey,
  airtableUserTableName: "Users",
  airtableUsernameColumn: "username",
  airtablePasswordColumn: "password",
  allowedOrigins: [`http://localhost:${PORT}`],
});

app.use(express.static('farm2people-web-app/build'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
