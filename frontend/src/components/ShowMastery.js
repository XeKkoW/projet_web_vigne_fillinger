import React from 'react';
import { useState } from 'react';
import champions from 'lol-champions'

const ShowMastery = (props) => {
	const champion = props.champion;
	var image = "";
	var imageChamp = "";
	var name = "";

	const mastery = (props) => {
		const level = props.level;
		if (level == 1) {
			image = ""
		}
		else if (level == 2) {
			image = ""
		}
		else if (level == 3) {
			image = ""
		}
		else if (level == 4) {
			image = ""
		}
		else if (level == 5) {
			image = ""
		}
		else if (level == 6) {
			image = ""
		}
		else if (level == 7) {
			image = ""
		}
	}


	const images = (props) => {
		const id = props
		//console.log(id);



		champions.forEach((el) => {
			if (el.key == id) {
				imageChamp = el.icon




			}
		})
	}


	const goodId = (props) => {
		const id = props
		//	console.log(id);

		champions.forEach((el) => {
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
				<h1 className="masteryLVL">{champion.championLevel}</h1>
				<h2 className="masteryPTS">{champion.championPoints} pts </h2>
			</li>
		</div>
	);
};

export default ShowMastery;