const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(require("routes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
