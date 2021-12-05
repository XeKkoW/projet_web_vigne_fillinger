import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowMastery from './ShowMastery';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-dc2b4b4b-2124-445b-8588-f9db90676b76"

const Mastery = (props) => {
	const summonerId = props.id
	const [data, setData] = useState([]);
	const [goodData, setGoodData] = useState([]);
	const [dataGraph, setDataGraph] = useState([]);
	/*var level1 = 0;
	var level2 = 0;
	var level3 = 0;
	var level4 = 0;
	var level5 = 0;
	var level6 = 0;
	var level7 = 0;*/

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
		//console.log(graph[level - 1]);

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
/*
const compteur = (props) => {
	const level = props
	if (level == 1) {
		level1++;
	}
	else if (level == 2) {
		level2++;
	}
	else if (level == 3) {
		level3++;
	}
	else if (level == 4) {
		level4++;
	}
	else if (level == 5) {
		level5++;
	}
	else if (level == 6) {
		level6++;
	}
	else if (level == 7) {
		level7++;
	}

}




{graph.map((level) => (

					//console.log(level)


				))}

*/