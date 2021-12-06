//Cet index.js s'occupe de la gestion du backend
const express = require('express');
const app = express();
require('./models/dbConfig');
const championsRoutes = require('./routes/championsController');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());

//permet l'appel de l'API et la BDD dans le front
const corsOption = {
	origin: "http://localhost:3002",
	credentials: true,
	'allowedHeaders': ['sessionId', 'Content-Type'],
	'exploseHeaders': ['sessionId'],
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false
}
app.use(cors(corsOption));
app.use('/champions', championsRoutes);


app.listen(5500, () => console.log('Server started 5500'));


