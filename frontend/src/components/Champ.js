import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreeChamp from './FreeChamp';
import '../styles/style.css';




const Champ = (props) => {
	const level = props.level;
	//console.log(level);
	const [dataFreeChamp, setDataFree] = useState([]);

	useEffect(() => {



		if (level > 10) {
			axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-6f32eaf0-ce10-46b7-b22c-69a9ee0a836e")
				.then((res) => {
					setDataFree(res.data.freeChampionIds)

				});
		}
		else if (level <= 10 && level > 0) {
			axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-6f32eaf0-ce10-46b7-b22c-69a9ee0a836e")
				.then((res) => {
					setDataFree(res.data.freeChampionIdsForNewPlayers)

				});
		}


	}, [level]);








	if (level > 0) {

		return (
			<div className="champ">

			<p className="descListe">Tes Champions Gratuits de la Semaine</p>

			
				<ul className="champ-list">
					{dataFreeChamp.map((champion) => (
						<FreeChamp champion={champion} />

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