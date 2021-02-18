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
  allowedOrigins: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  port: 3000,
<<<<<<< HEAD
  resolversDir: './resolvers/index.ts'
});
=======
});
>>>>>>> e3868d92374a88e4f76db44ba0300cd92d894d78
