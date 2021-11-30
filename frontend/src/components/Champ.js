import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreeChamp from './FreeChamp';
import '../styles/style.css';



const Champ = () => {
	const [dataFreeChamp, setDataFree] = useState([]);



	useEffect(() => {
		axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-b8fff504-d797-40ca-80be-4205b49a5d1e")
			.then((res) => {
				setDataFree(res.data.freeChampionIds)

			});
	}, []);




	return (
		<div className="champ">

			{console.log(dataFreeChamp)}
			
			<p className="descListe">Champions gratuits de la semaine</p>

			<ul className="champ-list">

				{dataFreeChamp.map((champion) => (
					<FreeChamp champion={champion} />
				))}

			</ul>
		</div>

	);
};

export default Champ;
