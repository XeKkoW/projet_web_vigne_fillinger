const mongoose = require("mongoose");

const ChampionsModel = mongoose.model(
	"test",
	{
		author: {
			type: String,
			require: true
		},
		message: {
			type: String,
			require: true
		}
	},
	"testus"
);

module.exports = { ChampionsModel };