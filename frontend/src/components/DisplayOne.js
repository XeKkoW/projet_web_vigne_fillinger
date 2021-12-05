import React from 'react';
import ShowAllChampions from './ShowAllChampion';

const DisplayOne = (props) => {
	const name = props.name;
	const champion = props.champion;

	if (champion.name == name) {
		return (
			<div>
				<h1>{champion.name}</h1>
				
			</div>
		);
	}
	else {
		return (<div>

		</div>)
	}
};

export default DisplayOne;