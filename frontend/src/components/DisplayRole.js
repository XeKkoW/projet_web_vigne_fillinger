import React from 'react';

const DisplayRole = (props) => {
	const role = props.role;
	var image = ""


	const testRole = () => {
		if (role.toString() === "Jungler") {
			console.log("Goooooooooooo");
			image = ""
		}
		else if (role == "Top") {
			image = ""
		}
		else if (role == "Mid") {
			image = ""
		}
		else if (role == "Bot") {
			image = ""
		}
		else if (role == "Supp") {
			image = ""
		}
		else {
			image = "erreur"
		}
	}

	testRole()
	return (
		<div>

		</div>
	);
};

export default DisplayRole;