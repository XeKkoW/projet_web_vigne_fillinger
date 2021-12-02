import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import champions from 'lol-champions'
import ShowMastery from './ShowMastery';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-2e85ef4b-9e1b-4a6d-bd72-1fd397b5c47c"
//?api_key=

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

/*
const dataSetting = () => {
			console.log("aaaaaaaaaaaaaaaaa")
			const champObj = Object.keys(data).map((i) => data[i]);
			const sortedArray = champObj

			sortedArray.length = 3
			setGoodData(sortedArray)
		}
		dataSetting()

		{console.log(goodData)}

		<h1>{data.championLevel}</h1>
*/