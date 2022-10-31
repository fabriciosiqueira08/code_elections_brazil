// server/index.js

const path = require("path");
const express = require("express");
const app = express();
// Fazer com que o Node sirva os arquivos do app em React criado
app.use(express.static(path.resolve(__dirname, "../client/build")));

const PORT = process.env.PORT || 3001;

app.get("/luna", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
