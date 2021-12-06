import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Ajout from '../Actions/Ajout';
import Modification from '../Actions/Modification';
import Suppression from '../Actions/Suppression';

//Permet d'effectuer le CRUD de la BDD
//appel la bonne fonction en fonction de là où on click

const Admin = () => {


	const [ajout, setAjout] = useState(true)
	const [suppression, setSuppression] = useState(false)
	const [updtate, setUpdate] = useState(false)


	//const erreur = document.querySelector('.erreur.error')


	const handleModals = (e) => {
		if (e.target.id === "add") {
			setAjout(true);
			setSuppression(false);
			setUpdate(false);
		}
		else if (e.target.id === "delete") {
			setAjout(false);
			setSuppression(true);
			setUpdate(false);
		}
		else if (e.target.id === "update") {
			setAjout(false);
			setSuppression(false);
			setUpdate(true);
		}
	}

	return (
		<div>
			<ul>
				<li onClick={handleModals} id="add"> Ajout </li>
				<li onClick={handleModals} id="delete"> Supression </li>
				<li onClick={handleModals} id="update"> Modification </li>
			</ul>
			{ajout && <Ajout />}
			{suppression && <Suppression />}
			{updtate && <Modification />}


		</div>
	);
};

export default Admin;