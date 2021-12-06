import axios from 'axios';
import React, { useEffect } from 'react';

const Admin = () => {
	const key = "321"
	const name = "Bibou"
	const title = "musclor"
	const image = "mirroir.png"
	const role = ["jungle", "mid"]

	//const erreur = document.querySelector('.erreur.error')
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

	return (
		<div>

		</div>
	);
};

export default Admin;