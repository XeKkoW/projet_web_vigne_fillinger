import React from 'react';
import Champ from '../components/Champ';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import '../styles/style.css';

const Accueil = () => {

	return (
		<div className="page2">
            <Navigation/>
            <div className="supportPage2">
                
                <h1>PAGE D'ACCUEIL</h1>
            </div>
		</div>

	);
};

export default Accueil;