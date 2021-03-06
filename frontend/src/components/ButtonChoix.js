import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import DisplayOne from './DisplayOne';

//Boutton de la page d'accueil qui permet d'appeler notre API seulement quans on clique sur le bouton (au chargement de la page) 
//ça permet donc d'éviter un crash de l'application

const ButtonChoix = (props) => {
	const name = props.name
	const [data, setData] = useState([])
	const [play, setPlay] = useState(false)


	useEffect(() => {

		if (play) {
			fetch('http://localhost:5500/champions')
				.then(res => res.json())
				.then((res) => {
					setData(res)
					setPlay(false)
				})
		}
	}, [play])

	const playOk = () => {
		setPlay(true);
	}

	return (
		<div>
			<button className="boutonNomJoueur" onClick={playOk}></button>
			{data.map((champion) => (

				< DisplayOne name={name} champion={champion} />
			))}


		</div>
	);
};

export default ButtonChoix;