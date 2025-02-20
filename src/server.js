const express = require("express");
const path = require("path");

const app = express();
const dotenv = require("dotenv");
const PokemonRouter = require("../routes/pokemon");

dotenv.config();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", PokemonRouter);

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
