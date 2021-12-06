import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const Modification = () => {
	const [name, setName] = useState("")
	const [title, setTitle] = useState("")
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

	const modifier = (props) => {
		const id = props
		console.log(id);
		axios({
			method: "put",
			url: `http://localhost:5500/champions/put/${id}`,
			withCredentials: true,
			data: {
				title,

			}
		})
			//axios.put(`http://localhost:5500/champions/put/${id}`)
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
				modifier(champion._id)
			}


		})

	}

	return (
		<div>
			<h1>Modification d'un champion</h1>
			<form action="" onSubmit={handleChange} id="add-form">
				<label htmlFor="text">Nom (avec une majuscule) du champion à modifier</label>
				<br />
				<input type="text" name="nom" id="nom" onChange={(e) => setName(e.target.value)} value={name} />
				<br />
				<label htmlFor="text">Nouveau titre du champion</label>
				<br />
				<input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
				<br />
				<input type="submit" value="Valider" />
			</form>




		</div>
	);
};

export default Modification;