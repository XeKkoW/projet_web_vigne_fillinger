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
				<h2>veuillez entrer votre summoner name</h2>

			</div>
		)
	}
};

export default Champ;

/*<ul>
				{dataFreeChamp.map((champion) => (
					<li>
						<FreeChamp champion={champion} />
					</li>
				))}


				{data.map((champion) => (
					<li>
						{console.log(data)};
					</li>
				))}
			</ul>
			*/


			//console.log(res.data.data.Aatrox.image.full);
				//console.log(res.data)
				//console.log(data.data);
				//console.log(Object.keys(data.data));
				//console.log(Object.keys(res.data.data));
/*Object.keys(res.data.data.Zoe).forEach((el) => {
	console.log(el)
})*/
/*Object.keys(data).forEach((el) => {
	console.log(el)
})*/
				//console.log(res.data.Zoe.id);
/*setData(Array.from(res.data));
console.log(data.isArray);
data2 = Array.from(res.data)*/
				//setData(Object.keys(data).entries(data))

				//console.log(data);

