const app = require("./app");
const port = 5000;

app
  .listen(port, () => {
    console.info(`server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });