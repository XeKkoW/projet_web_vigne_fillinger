const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId

//voici les différente fonction du CRUD avce leur route respective

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
		key: req.body.key,
		name: req.body.name,
		title: req.body.title,
		image: req.body.image,
		role: req.body.role
	})
	newRecord.save((err, docs) => {
		if (!err) res.send(docs);
		else console.log('Error creating new data' + err);
	})
})

//apdate
router.put("/put/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unknow : " + req.params.id)
	const updateRecord = {

		title: req.body.title,

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

router.delete("/delete/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unknow : " + req.params.id)

	ChampionsModel.findByIdAndDelete(
		req.params.id,
		(err, docs) => {
			if (!err) res.send(docs);
			else console.log("Delete error : " + err);
		}
	)
})

module.exports = router