import axios from 'axios';
import React from 'react';

const Test = () => {

	fetch('http://localhost:5500/champtests')
		.then(res => res.json())
		.then(res => console.log(res))

	return (
		<div>

		</div>
	);
};

export default Test;