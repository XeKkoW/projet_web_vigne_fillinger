const mongoose = require('mongoose');

//config de mongoose et de mongoDB Compass 
mongoose.connect(
	"mongodb+srv://Sungshiro:gabriel321@cluster0.f9kaw.mongodb.net/test",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) console.log("Mongodb connected");
		else console.log("Connection error : " + err);
	}
)