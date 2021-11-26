import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Champ = () => {
	const [data, setData] = useState([]);
	const [goodData, setGoodData] = useState([]);

	useEffect(() => {
		axios.get('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json')
			.then((res) => {
				setData(res.data.data)
				console.log(res.data)
				//console.log(data.data);
				//console.log(Object.keys(data.data));
				//console.log(Object.keys(res.data.data));
				Object.keys(res.data.data.Zoe).forEach((el) => {
					console.log(el)
				})
				/*Object.keys(data).forEach((el) => {
					console.log(el)
				})*/
				//console.log(res.data.Zoe.id);


			});
	}, []);





	return (
		<div className="champ">
			{Object.keys(data).forEach((el) => {
				console.log(el)
			})}

		</div>

	);
};

export default Champ;