import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';


const Navigation = () => {

	return (
		<div className="navigation">
            <div className="boutonAccueil">
			<NavLink exact to="/" activeClassName="nav-active"> 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Accueil
            </NavLink>
            </div>
            <div className="boutonPagePerso">
            <NavLink exact to="/pagePerso" activeClassName="nav-active">
                Page 2
            </NavLink>
            </div>
		</div>

	);
};

export default Navigation;