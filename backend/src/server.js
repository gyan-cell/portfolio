import app from "./app.js";

const server = app.listen(3000, () => {
  console.log("The server is running on port 3000!");
});
