import '../gerant/Addgerant.css';
import { FloatingLabel, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const Addgerant = () => {

	const [managerFName, setManagerFName] = useState('');
	const [managerLName, setManagerLName] = useState('');
	const [managerEmail, setManagerEmail] = useState('');
	const [managerBis, setManagerBis] = useState('');
	const [managerStreetType, setManagerStreetType] = useState('');
	const [managerCity, setManagerCity] = useState('');
	const [managerPhoneFix, setManagerPhoneFix] = useState();
	const [managerPhonePort, setManagerPhonePort] = useState();
	const [managerNumber, setManagerNumber] = useState();
	const [managerStreet, setManagerStreet] = useState('');
	const [managerComplement, setManagerComplement] = useState('');
	const [managerCP, setManagerCP] = useState();

	const handleManager= (e) => {
		e.preventDefault();

		const token =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDMwMjk2NDIsImV4cCI6MTY0MzAzMzI0Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImRlbGFuc2F5LnNAZ21haWwuY29tIn0.BvAv7H1OGvRpicXSvBuAwBn6XUUn6KGkegBWiprFFD1q0XXUnUWVVkswWCpmHFzgNaK7PjB0LNC-EB1sBfvn_9cXs1zl7BRdjtGY6x3V-M7GtphfixH3xMZMlA1gvS4IqNqv9JLLo1MU487tnnn8QnUvpn9F3FPMe5b-ZAKcmUVquOUMZavCebFbOA4KjtP29Mx5UjIXzSJTolYeG0OcAQdsR27FI8lk8PZuLas6M0H0wOxHvb5XbiIjhWMLSvp8ocilP9X4fEx2Wef7aVrG7mDIHs99UKWheH_BRLQBHzFUuoQDUczsbSZfsfdOJQWAA9oXB-waKXU2W5aY-4msVg';

		axios
			.post(
				`${process.env.REACT_APP_API_URL}/api/gerants`,
				{
					nom: managerFName ? managerFName : null,
					prenom: managerLName ? managerLName : null,
					bis: managerBis ? managerBis : null,
					voie: managerStreetType ? managerStreetType : null,
					rue: managerStreet ? managerStreet : null,
					complement: managerComplement ? managerComplement : null,
					postale: managerCP ? Number(managerCP) : null,
					ville: managerCity ? managerCity : null,
					email: managerEmail ? managerEmail : null,
					telfixe: managerPhoneFix ? Number(managerPhoneFix) : null,
					telport: managerPhonePort ? Number(managerPhonePort) : null,
					numero: managerNumber ? Number(managerNumber) : null
	
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='merg2'>
			{' '}
			<div className='R2'>
				<Link to='/'>
					<img className='next' src='/next.png' alt='next'></img>
				</Link>
			</div>
			<h1 className='H112'>Ajouter un g??rant</h1>
			<form method='POST' onSubmit={handleManager} className=''>
				<Card className='text-center bd cardB'>
					<Card.Header className='title-form2'>G??rant</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
						<Col>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Nom' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Nom'
											onChange={(e) =>
												setManagerFName(e.target.value)
											}
											value={managerFName}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Prenom' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Prenom'
											onChange={(e) =>
												setManagerLName(e.target.value)
											}
											value={managerLName}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Email' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Email'
											onChange={(e) =>
												setManagerEmail(e.target.value)
											}
											value={managerEmail}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Bis' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Bis'
											onChange={(e) =>
												setManagerBis(e.target.value)
											}
											value={managerBis}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Voie' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Voie'
											onChange={(e) =>
												setManagerStreetType(e.target.value)
											}
											value={managerStreetType}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Ville' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Ville'
											onChange={(e) =>
												setManagerCity(e.target.value)
											}
											value={managerCity}
											
										/>
									</FloatingLabel>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Tel. Fixe' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Tel Fixe'
											onChange={(e) =>
												setManagerPhoneFix(e.target.value)
											}
											value={managerPhoneFix}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Tel. Port' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Tel Port'
											onChange={(e) =>
												setManagerPhonePort(e.target.value)
											}
											value={managerPhonePort}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='N??' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Numero'
											onChange={(e) =>
												setManagerNumber(e.target.value)
											}
											value={managerNumber}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Rue' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Rue'
											onChange={(e) =>
												setManagerStreet(e.target.value)
											}
											value={managerStreet}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='Complement' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Cplmt'
											onChange={(e) =>
												setManagerComplement(e.target.value)
											}
											value={managerComplement}
											
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='CP' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='CP'
											onChange={(e) =>
												setManagerCP(e.target.value)
											}
											value={managerCP}
											
										/>
									</FloatingLabel>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
				<div className='center'>
					<Button type='submit' variant='warning' className='btn btn-sm btn-block mt-4'>
						Ajouter g??rant
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Addgerant;
