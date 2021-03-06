import React, { useState } from 'react';
import champions from 'lol-champions'
import { useEffect } from 'react/cjs/react.development';
import '../styles/style.css';

//récupère l'id d'un champion, appel la BDD et la parcours pour récupéré l'image et le nom du champion
//Ensuite elle affiche le tout

const FreeChamp = (props) => {
	const champion = props.champion
	//console.log(champions);
	var name = "";
	var image = "";


	const [data, setData] = useState([])
	var play = true

	useEffect(() => {

		if (play) {
			fetch('http://localhost:5500/champions')
				.then(res => res.json())
				.then((res) => {
					setData(res)
					play = false
				})
		}
	}, [play])





	const goodId = (props) => {
		const id = props
		//	console.log(id);

		data.map((el) => {
			if (el.key == id) {
				name = el.name

			}
		})

		/*champions.forEach((el) => {
			if (el.key == id) {
				name = el.name

			}
		})*/
	}
	const ifName = () => {
		if (name == "") {
			name = "erreur 321, le champion n'est pas dans la base de donée"
		}
	}

	const images = (props) => {
		const id = props
		//console.log(id);


		data.map((el) => {
			if (el.key == id) {
				image = el.image

			}
		})
		/*champions.forEach((el) => {
			if (el.key == id) {
				image = el.icon
				//console.log(image);



			}
		})*/
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
					<p className="nameChamp">~ {name} ~</p>



				</li>

			</div >
		);

	}
	else {
		return (
			<div className='invisibleChamp'>

			</div>
		)
	}



};

export default FreeChamp;