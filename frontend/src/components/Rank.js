import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowRank from './ShowRank';


const API_URL = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"
const API_KEY = "RGAPI-dc2b4b4b-2124-445b-8588-f9db90676b76"
//u2ZlGjTZuprsS0Eo7MV7IiO2awvsM5iaXuJVlT-ZMWuQ9hM 

const Rank = (props) => {
	const id = props.id


	//console.log(id);
	const [data, setData] = useState([])
	var tier = ""
	var rank = ""

	useEffect(() => {
		if (id != undefined) {


			axios.get(`${API_URL}${id}?api_key=${API_KEY}`)

				.then((res) => {
					setData(res.data);


				});



		}



	}, [id])


	const dataSettings = (props) => {
		const ranku = props
		if (ranku.queueType == "RANKED_SOLO_5x5") {
			rank = ranku.rank
			tier = ranku.tier
		}
	}









	return (
		<div>
			<ul>

				{data.map((rank) => (
					dataSettings(rank)
				))}
				<ShowRank rank={rank} tier={tier} />
			</ul>
		</div>
	);



};

export default Rank;