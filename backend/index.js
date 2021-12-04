const express = require('express');
const app = express();
require('./models/dbConfig');
const championsRoutes = require('./routes/championsController')
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json())

app.use(cors())
app.use('/testus', championsRoutes);

app.listen(5500, () => console.log('Server started 5500'));