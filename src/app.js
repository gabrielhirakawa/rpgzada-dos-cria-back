const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
const cors = require('cors');
const database = require("./config/database");

dotenv.config();
database.mongo();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(process.env.PORT || 3333);
