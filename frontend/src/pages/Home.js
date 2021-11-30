import React from 'react';
import Champ from '../components/Champ';
import '../styles/style.css';
import Name from '../components/Name';

const Home = () => {
	return (
		<div className="home">
			<h1>Accueil</h1>
			<Champ />
			<Name />
		</div>

	);
};

export default Home;