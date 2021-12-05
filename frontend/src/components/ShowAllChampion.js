import React, { useEffect, useState } from 'react';
import DisplayAll from './DisplayAll';


const ShowAllChampions = () => {

	//console.log(name)
	const [data, setData] = useState([])
	const [play, setPlay] = useState(true)


	useEffect(() => {

		if (play) {
			fetch('http://localhost:5500/champions')
				.then(res => res.json())
				.then((res) => {
					setData(res)
					setPlay(false)
				})
		}
	}, [play])






	return (
		<div>

			<ul>

				{
					data.map((champion) => (
						<DisplayAll champion={champion} />
					))
				}
			</ul>
		</div>
	);



}
export default ShowAllChampions;
//