import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const API_KEY = "RGAPI-9549364e-7295-42cd-892f-e71e28146f96";

const Summoner = (props) => {

	const name = props
	console.log(name);

	const [data, setData] = useState([])


	useEffect(() => {
		axios.get(`${API_URL}${name}?api_key=${API_KEY}`)
			.then((res) => {
				setData(res.data)

			});


	}, []);


	return (
		<div>
			{console.log(data)}
			<h2>{data.name}</h2>
		</div>
	);
};

export default Summoner;