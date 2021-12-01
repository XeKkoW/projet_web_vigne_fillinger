import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import champions from 'lol-champions'
import ShowMastery from './ShowMastery';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-1af062fa-c4f4-4fc2-96ba-17e42970c4cd"

const Mastery = (props) => {
	const summonerId = props.id
	const [data, setData] = useState([]);
	const [goodData, setGoodData] = useState([]);
	const [playOnce, setPlayOnce] = useState(true)

	data.length = 3;

	useEffect(() => {
		if (summonerId != undefined) {
			axios.get(`${API_URL}${summonerId}?api_key=${API_KEY}`)

				.then((res) => {
					setData(res.data);
					setPlayOnce(false);


				});

		}


	}, [summonerId]);



	return (
		<div>

			<ul className="mastery-List">
				{console.log(data)}
				{data.map((champion) => (

					<ShowMastery champion={champion} />


				))}



			</ul>

		</div>
	);
};

export default Mastery;
