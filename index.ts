import Airlock from "airlock-server";

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

new Airlock({
  airtableApiKey: [airtableConfig.apiKey],
  airtableBaseId: airtableConfig.baseKey,
  airtableUserTableName: "Users",
  airtableUsernameColumn: "username",
  airtablePasswordColumn: "password",
  allowedOrigins: ['http://localhost:8000'],
  port: 3000,
});
