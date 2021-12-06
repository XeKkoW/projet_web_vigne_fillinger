import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowMastery from './ShowMastery';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-dc2b4b4b-2124-445b-8588-f9db90676b76"

//Récupère les Mastery d'un joueur pour passer les 3 meilleur à ShowMastery.js

const Mastery = (props) => {
	const summonerId = props.id
	const [data, setData] = useState([]);
	const [goodData, setGoodData] = useState([]);
	const [dataGraph, setDataGraph] = useState([]);

	var graph = useState([])


	data.length = 3;
	graph.length = 7;

	useEffect(() => {
		if (summonerId != undefined) {
			axios.get(`${API_URL}${summonerId}?api_key=${API_KEY}`)

				.then((res) => {
					setData(res.data);
				});
		}
	}, [summonerId]);


	const compteur = (props) => {
		const level = props
		console.log(level);
		graph[level - 1]++;

	}

	const setGraph = () => {
		graph.map((el) => {
			el = 0;
		})
	}


	return (
		<div>

			<ul className="mastery-List">
				{console.log(dataGraph)}
				{setGraph()}
				{data.map((champion) => (

					<ShowMastery champion={champion} key={champion.name} />


				))}
				{dataGraph.map((level) => (

					compteur(level.championLevel)


				))}





			</ul>

		</div>
	);
};

export default Mastery;