import React from 'react';
import { useState } from 'react';
import champions from 'lol-champions'
var level = 0

const ShowMastery = (props) => {
	const champion = props.champion;
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