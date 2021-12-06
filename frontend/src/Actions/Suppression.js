import React from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

const Suppression = () => {
	const id = '61ad371aea0e6f0d23935eff'

	useEffect(() => {


		axios({
			method: "delete",
			url: `http://localhost:5500/champions`,
			withCredentials: true,
			data: { id }
		})
			.then((res) => {
				if (res.data.errors) {
					console.log(res.data.errors);
				}
				else {
					window.location = '/admin';
				}
			})
			.catch((err) => {
				console.log(err);
			})

	})
	return (
		<div>
			<h1>Suppression d'un champion</h1>

		</div>
	);
};

export default Suppression;