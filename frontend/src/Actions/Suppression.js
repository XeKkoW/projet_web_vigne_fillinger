import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
//'61ad371aea0e6f0d23935eff'
const Suppression = () => {
	const [name, setName] = useState("")
	const [data, setData] = useState([])
	const [play, setPlay] = useState(true)


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

	const supprimer = (props) => {
		const id = props
		console.log(id);
		axios.delete(`http://localhost:5500/champions/delete/${id}`)
			.then((res) => {
				if (res.data.errors) {
					console.log("erreur");
				}
				else {
					window.location = '/admin';
				}
			})
			.catch((err) => {
				console.log("j'ai catch : john cena ");
			})
	}

	const handleChange = (e) => {
		e.preventDefault();
		data.map((champion) => {

			if (champion.name == name) {

				console.log(champion.name);
				supprimer(champion._id)
			}


		})

	}

	return (
		<div>
			<h1>Suppression d'un champion</h1>
			<form action="" onSubmit={handleChange} id="add-form">
				<label htmlFor="text">Nom (avec une majuscule) du champion à supprimer</label>
				<br />
				<input type="text" name="nom" id="nom" onChange={(e) => setName(e.target.value)} value={name} />
				<br />
				<input type="submit" value="Valider" />
			</form>




		</div>
	);
};

export default Suppression;