import React from 'react';

const Results = props => {
	const {firstName, lastName, email, password, confirmPassword} = props.data;

	return (
				<div>
					<h3>Your form data</h3>
					<p>First Name: {firstName}</p>
					<p>Last Name: {lastName}</p>
					{ (firstName.length < 2 || lastName.length < 2) &&
						(<p style={{'font-weight':'bold'}}>Nombre y apellido deben tener al menos 2 caracteres</p>) }
					<p>Email: {email}</p>
					{ email.length < 5 &&
						(<p style={{'font-weight':'bold'}}>email debe tener al menos 5 caracteres</p>) }
					{ password !== confirmPassword &&
						(<p style={{'font-weight':'bold'}}>los passwords deben ser iguales!</p>) }
				</div>
		);
}

export default Results;
