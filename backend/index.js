const express = require('express');
const app = express();
require('./models/dbConfig');
const championsRoutes = require('./routes/championsController');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());

const corsOption = {
	origin: "http://localhost:3000",
	credentials: true,
	'allowedHeaders': ['sessionId', 'Content-Type'],
	'exploseHeaders': ['sessionId'],
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELET',
	'preflightContinue': false
}
app.use(cors(corsOption));
app.use('/champtests', championsRoutes);


app.listen(5500, () => console.log('Server started 5500'));


