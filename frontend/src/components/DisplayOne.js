import React from 'react';
import DisplayRole from './DisplayRole';

const DisplayOne = (props) => {
	const name = props.name;
	const champion = props.champion;

	if (champion.name == name) {
		return (
			<div>
				<h1>{champion.name}</h1>
				{
					champion.role.map((role) => (
						<DisplayRole role={role} />
					))
				}


			</div>
		);
	}
	else {
		return (<div>

		</div>)
	}
};

export default DisplayOne;

