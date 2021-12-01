import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';


const Navigation = () => {

	return (
		<div className="navigation">
			<NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/page2" activeClassName="nav-active">
                Page 2
            </NavLink>
		</div>

	);
};

export default Navigation;