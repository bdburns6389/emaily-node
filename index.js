const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
//Gives port for Heroku to apply PORT, or uses 5000 for development
app.listen(PORT);
