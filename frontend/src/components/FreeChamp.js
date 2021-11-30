import React from 'react';
import champions from 'lol-champions'
import { useEffect } from 'react/cjs/react.development';
import '../styles/style.css';

const FreeChamp = (props) => {
	const champion = props.champion
	//console.log(champions);
	var name = "";
	var image = "";







	const goodId = (props) => {
		const id = props
		//	console.log(id);

		champions.forEach((el) => {
			if (el.key == id) {
				name = el.name

			}
		})
	}
	const ifName = () => {
		if (name == "") {
			name = "erreur 321, le champion n'est pas dans la base de donée"
		}
	}

	const images = (props) => {
		const id = props
		//console.log(id);



		champions.forEach((el) => {
			if (el.key == id) {
				image = el.icon
				console.log(image);



			}
		})
	}

	images(champion)
	if (image != "") {
		return (
			< div >

				<li className="iconChamp">


					{goodId(champion)}
					{ifName()}
					{images(champion)}

					<img src={image} alt={name} />



				</li>

			</div >
		);

	}
	else {
		return (
			<div>

			</div>
		)
	}



};

export default FreeChamp;
//<img src={image} alt={name} />