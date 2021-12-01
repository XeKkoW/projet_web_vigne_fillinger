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
			axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-1af062fa-c4f4-4fc2-96ba-17e42970c4cd")
				.then((res) => {
					setDataFree(res.data.freeChampionIds)

				});
		}
		else if (level <= 10 && level > 0) {
			axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-1af062fa-c4f4-4fc2-96ba-17e42970c4cd")
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