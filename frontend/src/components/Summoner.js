import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Champ from './Champ';
import Mastery from './Mastery';
import '../styles/style.css';
import Rank from './Rank';

const API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const API_KEY = "RGAPI-2e85ef4b-9e1b-4a6d-bd72-1fd397b5c47c";

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

			<button className="boutonNomJoueur" onClick={playOk}>
				ENTRER
			</button>

			<h2 className="AffichageNom">- {data.name} -</h2>
<<<<<<< HEAD

			<Rank id={data.id} />
			<Mastery id={data.id} />
=======
			<h2 className="affichageLVL"> {data.summonerLevel} </h2>

			<Mastery id={data.id} play={playMastery} />
>>>>>>> f51f9519fc2f2a7098d3dcc99345b51ac52b57ab
			<Champ level={data.summonerLevel} />

		</div>
	);
};

export default Summoner;