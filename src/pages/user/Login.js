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

	const handleLogin = () => {

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const tokens = (username, password);
		const options = {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({
				username,
				password,
			}),
			headers
		};

		axios
			.post(`${process.env.REACT_APP_API_URL}/api/users`, options, {
				username: username ? username : null,
				password: password ? password : null,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));

		localStorage.setItem('tokens', JSON.stringify(tokens));
	};

	return (
<div className='Login'>
	<Card className='card-log'>
		<Card.Body>
			<Form method='POST' onSubmit={handleLogin}>
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
};
export default Login;
