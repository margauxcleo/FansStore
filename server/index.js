const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to our application." });
});

// db.sequelize.sync();

require("./routes/auth.route")(app);
require("./routes/article.route")(app);
require("./routes/clients.route")(app);
require("./routes/orders.route")(app);
require("./routes/orderDetails.route")(app);


const PORT = process.env.port | 8088;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});