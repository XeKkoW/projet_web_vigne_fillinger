import React from 'react';
import champions from 'lol-champions'

const FreeChamp = (props) => {
	const champion = props.champion
	//console.log(champion);
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

		champions.forEach((el) => {
			if (el.key == id) {
				image = el.icon
				//console.log(image);


			}
		})
	}





	return (
		<div>
			<li>
				{images(champion)}
				{goodId(champion)}
				{ifName}
				<img src={image} alt={name} />



			</li>
		</div>
	);
};

export default FreeChamp;
//<img src={image} alt={name} />