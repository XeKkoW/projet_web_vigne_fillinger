import React from 'react';
import '../styles/style.css';

const DisplayAll = (props) => {
	const champion = props.champion;


	return (
		<div>
			<ul>
				<li className="iconAllChamp">
					<img src={champion.image} alt={champion.name} />
					<p className="nameAllChamp">~ {champion.name} ~</p>
				</li>
			</ul>
		</div>
	);
};

export default DisplayAll;