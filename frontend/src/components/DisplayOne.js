import React from 'react';
import DisplayRole from '../styles/DisplayRole';
import ShowAllChampions from './ShowAllChampion';

//affiche seulement le champion choisit dans ChoixChampion.js
//affiche toute les information d'un champion

const DisplayOne = (props) => {
	const name = props.name;

	const champion = props.champion;

	if (champion.name == name) {
		return (
			<div>
				<p className="nomChampSelect">{champion.name}</p>
				<p className="titleChampSelect">{champion.title}</p>

				<div className="contenainerChampSelect">

					<img src={champion.image} className="imgChampSelect" />
					<div className="roleChampSelect">
						{champion.role.map((role) => (
							<DisplayRole role={role} />
						))}
					</div>

				</div>

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

