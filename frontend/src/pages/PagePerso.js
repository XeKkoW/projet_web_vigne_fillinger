import React from 'react';
import Champ from '../components/Champ';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import '../styles/style.css';

//Affiche les donnée d'un joueur

const PagePerso = () => {

	return (
		<div className="home">
			<Navigation />
			<Name />
		</div>

	);
};

export default PagePerso;