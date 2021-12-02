import React from 'react';
import { useState } from 'react/cjs/react.development';

const API_URL = ""
const API_KEY = ""

const ViewGame = (props) => {

	const id = props.id

	const [data, setData] = useState([])

	useEffect(() => {

		axios.get(`${API_URL}${id}?api_key=${API_KEY}`)

			.then((res) => {
				setData(res.data);


			});

	}, [id])




	return (
		<div>

		</div>
	);
};

export default ViewGame;