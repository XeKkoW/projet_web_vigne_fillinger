import React from 'react';
import Champ from '../components/Champ';
import Name from '../components/Name';
import '../styles/style.css';

const Home = () => {

	return (
		<div className="home">
			<h1>Accueil</h1>
			<Name />
		</div>

	);
};

export default Home;