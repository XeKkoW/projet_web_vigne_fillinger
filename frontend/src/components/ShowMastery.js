import React from 'react';
import { useState, useEffect } from 'react';
import champions from 'lol-champions'
var level = 0

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
					<img className="masteryIMG1" src="../src/styles/img/mastery1.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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
					<img className="masteryIMG2" src="../src/styles/img/mastery2.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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
					<img className="masteryIMG3" src="../src/styles/img/mastery3.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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
					<img className="masteryIMG4" src="../src/styles/img/mastery4.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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
					<img className="masteryIMG5" src="../src/styles/img/mastery5.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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
					<img className="masteryIMG6" src="../src/styles/img/mastery6.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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
					<img className="masteryIMG7" src="../src/styles/img/mastery7.png" />
					<h2 className="masteryPTS">{champion.championPoints} pts </h2>
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