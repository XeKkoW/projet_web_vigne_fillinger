import React from 'react';
import { Component } from 'react';
import Summoner from './Summoner';


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
			<div className="App">

				<input
					type="text"
					name="Ville"
					value={name}
					onChange={this.handleChange}
				/>

				<Summoner name={name} />
			</div>
		);
	}
};

export default Name;