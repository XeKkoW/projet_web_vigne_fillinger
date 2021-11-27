import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Champ = () => {
	const [data, setData] = useState([]);
	//<p>{data ? data.Aatrox.name : "" }</p>


	useEffect(() => {
		axios.get('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/fr_FR/champion.json')
			.then((res) => {
				setData(res.data.data)

			});
	}, []);





	return (
		<div className="champ">




		</div>

	);
};

export default Champ;

/*<ul>
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

