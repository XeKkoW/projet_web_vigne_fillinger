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
	var level = 0;
	const [data, setData] = useState([]);
	const [play, setPlay] = useState(false);




	useEffect(() => {
		if (play) {
			axios.get(`${API_URL}${name}?api_key=${API_KEY}`)
				.then((res) => {
					setData(res.data);
					setPlay(false);


				});
		}

	}, [play]);

	const playOk = () => {
		setPlay(true);
	}


	return (
		<div>

			<button className="boutonAccueil" onClick={playOk}>
				valider
			</button>

			<h2 className="AffichageNom">-{data.name}-</h2>
			<Champ level={data.summonerLevel} />
			<Mastery id={data.id} />
		</div>
	);
};

export default Summoner;