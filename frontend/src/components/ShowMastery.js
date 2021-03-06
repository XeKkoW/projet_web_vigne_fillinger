import React from 'react';
import { useState, useEffect } from 'react';
import champions from 'lol-champions'
var level = 0

//affiche les 3 meilleures mastery d'un joueur à partir de l'ID du champion
//affiche le champion à partir de la BDD
//affiche l'image des mastery en fonction du niveau de celles-ci

const ShowMastery = (props) => {
	const champion = props.champion;
	var imageChamp = "";
	var name = "";

	const [data, setData] = useState([])
	var play = true

	useEffect(() => {

		if (play) {
			fetch('http://localhost:5500/champions')
				.then(res => res.json())
				.then((res) => {
					setData(res)
					play = false
				})
		}
	}, [play])

	const images = (props) => {
		const id = props
		data.map((el) => {
			if (el.key == id) {
				imageChamp = el.image

			}
		})
	}

	const goodId = (props) => {
		const id = props
		data.map((el) => {
			if (el.key == id) {
				name = el.name

			}
		})
	}
	const ifName = () => {
		if (name == "") {
			name = "erreur 321, le champion n'est pas dans la base de donée"
		}
	}

	const mastery = (props) => {
		level = props;
		//console.log(level);
	}
	mastery(champion.championLevel)
	if (level == 1) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG1" />
				</li>
			</div>
		);
	}
	else if (level == 2) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG2" />
				</li>
			</div>
		);
	}
	else if (level == 3) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG3" />
				</li>
			</div>
		);
	}
	else if (level == 4) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG4" />

				</li>
			</div>
		);
	}
	else if (level == 5) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG5" />

				</li>
			</div>
		);
	}
	else if (level == 6) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG6" />
				</li>
			</div>
		);
	}
	else if (level == 7) {
		return (
			<div>
				<li>
					{
						mastery(champion.championLevel),
						goodId(champion.championId),
						ifName(),
						images(champion.championId)
					}
					<img src={imageChamp} alt={name} />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					<div className="masteryIMG7" />
				</li>
			</div>
		);
	}
	else {
		return (
			<div></div>
		);
	}


};

export default ShowMastery;