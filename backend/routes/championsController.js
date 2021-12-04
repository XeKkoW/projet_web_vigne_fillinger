const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId

const { ChampionsModel } = require('../models/championsModel');

router.get('/', (req, res) => {
	console.log(ChampionsModel);
	ChampionsModel.find((err, docs) => {
		if (!err) res.send(docs);
		else console.log("Error to get data :" + err);
	})
})

router.post('/', (req, res) => {
	const newRecord = new ChampionsModel({
		author: req.body.author,
		message: req.body.message
	})
	newRecord.save((err, docs) => {
		if (!err) res.send(docs);
		else console.log('Error creating new data' + err);
	})
})

//apdate
router.put("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unknow : " + req.params.id)
	const updateRecord = {
		author: req.body.author,
		message: req.body.message
	};
	ChampionsModel.findByIdAndUpdate(
		req.params.id,
		{ $set: updateRecord },
		{ new: true },
		(err, docs) => {
			if (!err) res.send(docs);
			else console.log("Update error : " + err);
		}
	)
})

router.delete("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unknow : " + req.params.id)

	ChampionsModel.findByIdAndRemove(
		req.params.id,
		(err, doc) => {
			if (!err) res.send(docs);
			else console.log("Delete error : " + err);
		}
	)
})

module.exports = router