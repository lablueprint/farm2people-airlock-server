import Airlock from "airlock-server";

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const PORT = 8000;

const airlock = new Airlock({
  airtableApiKey: [airtableConfig.apiKey],
  airtableBaseId: airtableConfig.baseKey,
  airtableUserTableName: "Users",
  airtableUsernameColumn: "username",
  airtablePasswordColumn: "password",
  allowedOrigins: ['http://localhost:8000'],
});

airlock.server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
