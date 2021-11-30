import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Champ from './Champ';
import Mastery from './Mastery';

import '../styles/style.css';

const API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const API_KEY = "RGAPI-b8fff504-d797-40ca-80be-4205b49a5d1e";

const Summoner = (props) => {

	const name = props.name
	//console.log(name);
	var level = 0;
	const [data, setData] = useState([]);
	const [play, setPlay] = useState(false);




	useEffect(() => {
		if (play) {
			axios.get(`${API_URL}${name}?api_key=${API_KEY}`)
				//axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/thedarkgamer321?api_key=RGAPI-9549364e-7295-42cd-892f-e71e28146f96")
				.then((res) => {
					setData(res.data);
					setPlay(false);


				});
			/*level = data.summonerLevel;
			console.log("aaaaaaaaaaa");
			console.log(data.summonerLevel);*/
		}

	}, [play]);

	const playOk = () => {
		setPlay(true);
		//console.log(data);
	}


	return (
		<div>

			<button onClick={playOk}>
				valider
			</button>

			<h2>{data.name}</h2>
			<Champ level={data.summonerLevel} />
			<Mastery id={data.id} />
		</div>
	);
};

export default Summoner;