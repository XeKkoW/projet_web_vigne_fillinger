import React from 'react';
import { Component } from 'react';
import ButtonChoix from './ButtonChoix';

class ChoixChampion extends Component {
	state = {
		name: ""
	};

	handleChange = event => {
		this.setState({ name: event.target.value });
	};



	render() {

		const { name } = this.state;
		return (
			<div className="name">
				<h1 className="titreInput">Choisi ton Champion</h1>
				<input
					className="inputNomJoueur"
					type="text"
					name="Summoner name"
					value={name}
					onChange={this.handleChange}
				/>




				<ButtonChoix name={name} />



			</div>
		);

	}
};

export default ChoixChampion;