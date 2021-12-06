import React from 'react';

//affiche le rank d'un joueur

const ShowRank = (props) => {
	const rank = props.rank
	const tier = props.tier
	//console.log(tier);
	//console.log(rank);
	if (rank != "" && tier != "") {
		return (
			<div>
				<h1 className="rankJoueur">Rank : {tier} {rank} </h1>
			</div>
		);
	}
	else {
		return (
			<div>

			</div>
		);
	}
};

export default ShowRank;