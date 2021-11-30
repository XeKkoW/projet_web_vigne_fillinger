import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const API_URL = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"
const API_KEY = "RGAPI-6f32eaf0-ce10-46b7-b22c-69a9ee0a836e"
//?api_key=

const Mastery = (props) => {
	const summonerId = "oNTzQR0w0urfiMSRAerBbwkt4WiRjllT0ZjGeqcnLizH6sE"
	const [data, setData] = useState([]);
	;

	useEffect(() => {

		axios.get(`${API_URL}${summonerId}?api_key=${API_KEY}`)

			.then((res) => {
				setData(res.data);



			});

	}, []);


	return (
		<div>
			{console.log(data)}
		</div>
	);
};

export default Mastery;