import React from 'react';
import DisplayRole from '../styles/DisplayRole';
import ShowAllChampions from './ShowAllChampion';

const DisplayOne = (props) => {
	const name = props.name;
	
	const champion = props.champion;

	if (champion.name == name) {
		return (
			<div>
				<p className="nomChampSelect">{champion.name}</p>
				<p className="titleChampSelect">{champion.title}</p>
				<p>
				<img src={champion.image} className="imgChampSelect" />    
				
					{champion.role.map((role)=> (
						<DisplayRole role={role} />

					))}
				</p>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
		);
	}
	else {
		return (
		<div>

		</div>)
	}
};

export default DisplayOne;