import Airlock from "airlock-server";

new Airlock({
  airtableApiKey: [],
  airtableBaseId: "",
  airtableUserTableName: "",
  airtableUsernameColumn: "",
  airtablePasswordColumn: "",
  allowedOrigins: [],
  port: 3000,
  resolversDir: './resolvers/index.ts'
});
