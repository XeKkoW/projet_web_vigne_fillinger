import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreeChamp from './FreeChamp';
import champions from 'lol-champions'




const Champ = () => {
	const [dataFreeChamp, setDataFree] = useState([]);



	useEffect(() => {
		axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-5f4d6682-73b1-406f-80ba-1b506eabbeaf")
			.then((res) => {
				setDataFree(res.data.freeChampionIds)

			});
	}, []);




	return (
		<div className="champ">




			<ul className="champ-list">

				{dataFreeChamp.map((champion) => (
					<FreeChamp champion={champion} />
				))}

			</ul>
		</div>

	);
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

