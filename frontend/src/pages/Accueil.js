import Navigation from '../components/Navigation';
import React from 'react';
import ChoixChampion from '../components/ChoixChampion';
import ShowAllChampions from '../components/ShowAllChampion';


const Accueil = () => {

	return (
		<div className="page2">
			<Navigation />
			<div className="supportPage2">
				<ChoixChampion />
				<ShowAllChampions />
			</div>
			
		</div>

	);
};

export default Accueil;