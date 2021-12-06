import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Champ from './Champ';
import Mastery from './Mastery';
import '../styles/style.css';
import Rank from './Rank';
import Graph from './Graph';
import MasterGraph from './MasterGraph';

const API_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const API_KEY = "RGAPI-dc2b4b4b-2124-445b-8588-f9db90676b76";

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
			<h2 className="affichageNom">{data.name}</h2>
			<h2 className="affichageLVL"> {data.summonerLevel} </h2>

			<Rank id={data.id} />
			<Mastery id={data.id} />
			<Graph id={data.id} />
			<Champ level={data.summonerLevel} />
		</div>
	);
};

export default Summoner;