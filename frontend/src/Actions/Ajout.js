import React, { useState } from 'react';
import axios from 'axios';

//permet l'ajout d'un champion dans la BDD 

const Ajout = () => {
	const [key, setKey] = useState("")
	const [name, setName] = useState("")
	const [title, setTitle] = useState("")
	const [image, setImage] = useState("")
	const [role, setRole] = useState([])

	const handleChange = (e) => {
		e.preventDefault();

		axios({
			method: "post",
			url: "http://localhost:5500/champions",
			withCredentials: true,
			data: {
				key,
				name,
				title,
				image,
				role,
			}
		})
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



	return (
		<div>
			<h1>Ajout d'un nouveau champion</h1>
			<form action="" onSubmit={handleChange} id="add-form">
				<label htmlFor="text">Nom (avec une majuscule)</label>
				<br />
				<input type="text" name="nom" id="nom" onChange={(e) => setName(e.target.value)} value={name} />
				<br />
				<label htmlFor="text">Key</label>
				<br />
				<input type="text" name="key" id="key" onChange={(e) => setKey(e.target.value)} value={key} />
				<br />
				<label htmlFor="text">Title</label>
				<br />
				<input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
				<br />
				<label htmlFor="text">Image</label>
				<br />
				<input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)} value={image} />
				<br />
				<label htmlFor="text">Role</label>
				<br />
				<input type="text" name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role} />
				<br />

				<input type="submit" value="Valider" />
			</form>
		</div>
	);
};

export default Ajout;

/*
const key = "321"
	const name = "Bibou"
	const title = "musclor"
	const image = "mirroir.png"
	const role = ["jungle", "mid"]

useEffect(() => {

		axios({
			method: "post",
			url: "http://localhost:5500/champtests",
			withCredentials: true,
			data: {
				key,
				name,
				title,
				image,
				role,
			}
		})
			.then((res) => {
				if (res.data.errors) {
					console.log("erreur");
				}
				else {
					console.log("c'est bon");
				}
			})
			.catch((err) => {
				console.log("j'ai catch : john cena ");
			})
	})

	*/