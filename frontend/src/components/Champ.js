import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreeChamp from './FreeChamp';
import '../styles/style.css';

const API_URL = "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key="
const API_KEY = "RGAPI-54d05f27-2315-47f0-89c8-69836942ef1f"

//ce component fais appel à l'API des champions gratuit en fonction du niveau du joueur 
//elle appelle ensuite FreeChamp.js

const Champ = (props) => {
	const level = props.level;
	//console.log(level);
	const [dataFreeChamp, setDataFree] = useState([]);

	useEffect(() => {



		if (level > 10) {
			axios.get(`${API_URL}${API_KEY}`)
				.then((res) => {
					setDataFree(res.data.freeChampionIds)

				});
		}
		else if (level <= 10 && level > 0) {
			axios.get(`${API_URL}${API_KEY}`)
				.then((res) => {
					setDataFree(res.data.freeChampionIdsForNewPlayers)

				});
		}


	}, [level]);








	if (level > 0) {

		return (
			<div className="champ">

				<p className="descListe">Champions gratuits de la semaine</p>



				<ul className="champ-list">
					{dataFreeChamp.map((champion) => (
						<FreeChamp champion={champion} key={champion.name} />

					))}

				</ul>
			</div>

		);
	}
	else {
		return (
			<div>


			</div>
		)
	}
};

export default Champ;