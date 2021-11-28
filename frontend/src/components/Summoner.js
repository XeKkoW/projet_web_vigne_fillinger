import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const Summoner = () => {
	const [data, setData] = useState([])
	var name = ""

	const getSummoner = () => {
		axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + { name } + "?api_key=RGAPI-9549364e-7295-42cd-892f-e71e28146f96")
			.then((res) => {
				setData(res.data)

			});


	}


	return (
		<div>
			<form action="">
				<label for="Summoner name"> Entrer votre Summoner name</label>
				<input
					type="text"
					value={name}
					onChange={name.handleChange}
				/>
			</form>
			{getSummoner}
			{console.log(data)}
		</div>
	);
};

export default Summoner;