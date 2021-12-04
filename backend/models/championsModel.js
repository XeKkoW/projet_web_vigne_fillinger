const mongoose = require("mongoose");

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
	"champtests"
);

module.exports = { ChampionsModel };