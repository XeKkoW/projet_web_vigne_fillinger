import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowRank from './ShowRank';


const API_URL = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"
const API_KEY = "RGAPI-54d05f27-2315-47f0-89c8-69836942ef1f"

//récupère le rank d'un joueur à partir d'une API


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