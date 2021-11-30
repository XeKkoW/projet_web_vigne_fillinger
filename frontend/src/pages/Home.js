import React from 'react';
import Champ from '../components/Champ';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import '../styles/style.css';

const Home = () => {

	return (
		<div className="home">
			<Navigation/>
			<Name />
		</div>

	);
};

export default Home;