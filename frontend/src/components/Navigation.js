import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

//Navigation de l'application

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
            <div className="boutonAccueil">
                <NavLink exact to="/pagePerso" activeClassName="nav-active">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Mon Aventure
                </NavLink>
            </div>
            <div className="boutonAccueil">
                <NavLink exact to="/media" activeClassName="nav-active">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Mes Médias
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;