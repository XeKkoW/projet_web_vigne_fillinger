import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Champ from './Champ';
import Mastery from './Mastery';
import '../styles/style.css';

const API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const API_KEY = "RGAPI-6f32eaf0-ce10-46b7-b22c-69a9ee0a836e";

const Summoner = (props) => {

	const name = props.name
	var level = 0;
	const [data, setData] = useState([]);
	const [play, setPlay] = useState(false);
	const [playMastery, setPlayMastery] = useState(false);




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

			<button className="boutonNomJoueur" onClick={playOk}>
				ENTRER
			</button>
			
			<h2 className="affichageNom">- {data.name} -</h2>
			<h2 className="affichageLVL"> {data.summonerLevel} </h2>

			<Mastery id={data.id} play={playMastery} />
			<Champ level={data.summonerLevel} />

			{console.log(data.id)}
		</div>
	);
};

export default Summoner;