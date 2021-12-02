import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import champions from 'lol-champions'
import ShowMastery from './ShowMastery';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-798ec2e5-62e2-42b8-b948-37b4bc57adf3"

const Mastery = (props) => {
	const summonerId = props.id
	const [data, setData] = useState([]);
	const [goodData, setGoodData] = useState([]);

	data.length = 3;

	useEffect(() => {
		if (summonerId != undefined) {
			axios.get(`${API_URL}${summonerId}?api_key=${API_KEY}`)

				.then((res) => {
					setData(res.data);


				});

		}


	}, [summonerId]);



	return (
		<div>

			<ul className="mastery-List">
				{console.log(data)}
				{data.map((champion) => (

					<ShowMastery champion={champion} key={champion.name} />


				))}



			</ul>

		</div>
	);
};

export default Mastery;
