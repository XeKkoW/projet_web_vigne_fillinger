const mongoose = require("mongoose");

//model de notre base de données
const ChampionsModel = mongoose.model(
	"test",
	{
		key: {
			type: String,
			require: true
		},
		name: {
			type: String,
			require: true
		},
		title: {
			type: String,
			require: true
		},
		image: {
			type: String,
			require: true
		},
		role: {
			type: Array,
			require: true
		}

	},
	"champions"
);

module.exports = { ChampionsModel };