import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowMastery from './ShowMastery';
import MasterGraph from './MasterGraph';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-dc2b4b4b-2124-445b-8588-f9db90676b76"




const Graph = (props) => {
	const summonerId = props.id
	const [dataGraph, setDataGraph] = useState([]);


	var graph = [0, 0, 0, 0, 0, 0, 0];




	useEffect(() => {
		if (summonerId != undefined) {
			axios.get(`${API_URL}${summonerId}?api_key=${API_KEY}`)

				.then((res) => {
					setDataGraph(res.data);
				});
		}
	}, [summonerId]);


	const compteur = (props) => {
		const level = props
		graph[level - 1] = graph[level - 1] + 1;
		//console.log(graph[level - 1]);

	}




	return (
		<div>

			<ul className="mastery-List">
				{console.log(dataGraph)}

				{dataGraph.map((level) => (

					compteur(level.championLevel)

					
				))}
				
				
				{console.log(graph)}


			</ul>

			<MasterGraph graph={graph}/>

		</div>
	);
};

export default Graph;

