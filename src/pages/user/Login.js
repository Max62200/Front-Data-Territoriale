import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// const handleLogin = () => {

	// 	const headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');

		
	// 	const options = {
	// 		method: 'POST',
	// 		mode: 'cors',
	// 		body: JSON.stringify({
	// 			username,
	// 			password,
	// 		}),
	// 		headers
	// 	};

	// 	axios
	// 		.post(`${process.env.REACT_APP_API_URL}/api/login`, options, {
	// 			username: username ? username : null,
	// 			password: password ? password : null,
	// 		})
	// 		.then((res) => {
	// 			console.log(res);const tokens = (res.token);	localStorage.setItem('tokens', JSON.stringify(tokens));

	// 		})
	// 		.catch((err) => console.log(err));

		
		
	// };

	class AuthService {
		login(username, password) {
		  return axios
			.post('https://data-territoriale.herokuapp.com/api/login', {
			  username,
			  password
			})
			.then(response => {
			  if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
			  }
	  
			  return response.data;
			});
		}
	
	
	}	const user = JSON.parse(localStorage.getItem('user'));

		if (user && user.accessToken) {
		  // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
		  return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
		} else {
		  
		
	

	return (
<div className='Login'>
	<Card className='card-log'>
		<Card.Body>
			<Form method='POST' onSubmit={AuthService}>
				<Form.Group size='lg' className='form' controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size='lg' controlId='password'>
					<Form.Label>Mot de passe</Form.Label>
					<Form.Control
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button block size='sm' className='center mt-4' type='submit'>
					Se connecter
				</Button>
			</Form>
			<p className='mt-4 text-log'>
				Pas encore inscris ? cliquez <Link to='/Register'>ici</Link>
			</p>
		</Card.Body>
	</Card>
</div>
	);
}};
export default Login;
