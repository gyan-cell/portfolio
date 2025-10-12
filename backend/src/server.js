import dotenv from "dotenv";

import app from "./app.js";

// Load environment variables in development
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./.env" });
}

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
