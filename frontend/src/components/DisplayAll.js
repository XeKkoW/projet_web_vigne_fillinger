import React from 'react';
import '../styles/style.css';

const DisplayAll = (props) => {
	const champion = props.champion;


	return (
		<div>
			<ul>
				<li className="iconChamp">
					<img src={champion.image} alt={champion.name} />
					<p className="nameChamp">~ {champion.name} ~</p>
				</li>
			</ul>
		</div>
	);
};

export default DisplayAll;