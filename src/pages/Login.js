import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className='Login'>
			<Card className="card-log">
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group size='lg' className='form' controlId='email'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							autoFocus
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group size='lg' controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button
						block
						size='sm'
						className='center mt-4'
						type='submit'
						disabled={!validateForm()}>
						Login
					</Button>
				</Form>
				<p className='mt-4 text-log'>
					Pas encore inscris ? cliquer <Link to='/Register'>ici</Link>
				</p>
				</Card.Body>
			</Card>
		</div>
	);
}
