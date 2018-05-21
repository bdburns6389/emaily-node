const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});


const PORT = process.env.PORT || 5000;
 //Gives port for Heroku to apply PORT, or uses 5000 for development
app.listen(PORT);