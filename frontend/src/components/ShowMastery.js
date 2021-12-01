import React from 'react';
import { useState } from 'react';
import champions from 'lol-champions'

const ShowMastery = (props) => {
	const champion = props.champion;
	var image = "";
	var imageChamp = "";
	var name = "";

	const images = (props) => {
		const id = props
		champions.forEach((el) => {
			if (el.key == id) {
				imageChamp = el.icon
			}
		})
	}

	const goodId = (props) => {
		const id = props
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

	const mastery = (props) => {
		const level = props.level;
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
						<img className="masteryIMG" src= "../src/styles/img/mastery1.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
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
						<img className="masteryIMG" src= "../src/styles/img/mastery2.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
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
						<img className="masteryIMG" src= "../src/styles/img/mastery3.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
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
						<img className="masteryIMG" src= "../src/styles/img/mastery4.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
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
						<img className="masteryIMG" src= "../src/styles/img/mastery5.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
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
						<img className="masteryIMG" src= "../src/styles/img/mastery6.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
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
						<img className="masteryIMG" src= "../src/styles/img/mastery7.png" alt="mastery"/>
						<h1 className="masteryLVL">{champion.championLevel}</h1>
						<h2 className="masteryPTS">{champion.championPoints} pts </h2>
					</li>
				</div>
			);
		}
	}
	
};

export default ShowMastery;