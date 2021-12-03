import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Champ from './Champ';
import Mastery from './Mastery';
import '../styles/style.css';
import Rank from './Rank';

const API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const API_KEY = "RGAPI-798ec2e5-62e2-42b8-b948-37b4bc57adf3";

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
				<span></span>
			</button>
			<h2 className="affichageNom">- {data.name} -</h2>
			<h2 className="affichageLVL"> {data.summonerLevel} </h2>

			<Rank id={data.id} />
			<Mastery id={data.id} />
			<Champ level={data.summonerLevel} />

		</div>
	);
};

export default Summoner;