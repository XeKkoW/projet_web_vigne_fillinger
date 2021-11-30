import React from 'react';
import { Component } from 'react';
import Summoner from './Summoner';
import '../styles/style.css';


class Name extends Component {
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
				<h1 className="titreInput">Qui ose s'aventurer sur la Faille ?</h1>
				<input
					className="inputNomJoueur"
					type="text"
					name="Summoner name"
					value={name}
					onChange={this.handleChange}
				/>

				{<Summoner name={name} />}


			</div>
		);

	}
};

export default Name;
/*<button onClick={this.appelSummoner(this.name)}>
					valider
				</button>
				*/