const express = require("express");
const router = express.Router();
const cors = require("cors");

const mainRouter = require("./routes/index");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter); 

const PORT = process.env.PORT;
module.exports = router;

app.listen(PORT, console.log(`server started at PORT ${PORT}`));