import './Addcommerce.css';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Addcommerce = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);
	return (
		<div className='mt5'>  
			<h1>Ajouter un commerce</h1>

			<form className=''>
				<Card className='text-center '>
					<Card.Header className='title-form2'>COMMERCE</Card.Header>
					<Card.Body>
					<Row className='mg-1'>
							<Col>
								<Row>
									<Col className='mg-4'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Nom'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Numero'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='bis'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='voie'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='rue'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='complement'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='CP'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Ville'
											/>
										</div>
									</Col>
									<Col className='mg-4'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Latitude'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Longitude'
											/>
										</div>
										<div className='form-group'>
											<input
												type='email'
												className='form-control size'
												placeholder='email'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Telephone'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='FAX'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control size'
												placeholder='Typologie'
											/>
										</div>
										<div className='form-group size mt-3'>
											<Form.Label>Accés PMR</Form.Label>
											<Form.Select className='size'>
												<option>oui</option>
												<option>non</option>
											</Form.Select>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form2'>Horaires</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col className='mb-5'>
								<div className='form-group size'>
									<Form.Label>lundi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>lundi Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>lundi Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>lundi Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>

							<Col className='mb-5'>
								<div className='form-group size'>
									<Form.Label>mardi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='mardi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>mardi Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='mardi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>mardi Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='mardi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Mardi Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Mardi Soir'
									/>
								</div>
							</Col>
							<Col className='mb-5'>
								<div className='form-group size'>
									<Form.Label>Mercredi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Mercredi Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Mercredi Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Mercredi Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>

							<Col className='mb-5'>
								<div className='form-group size'>
									<Form.Label>Jeudi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Jeudi Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Jeudi Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Jeudi Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>
							<Col className='mb-5'>
								<div className='form-group size'>
									<Form.Label>Vendredi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Vendredi Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Vendredi Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Vendredi Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>
							<Col className='mb-5'>
								<div className='form-group size'>
									<Form.Label>Samedi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Samedi Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Samedi Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Samedi Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>
							<div className='  '>
								<div className='form-group size'>
									<Form.Label>Dimanche Matin</Form.Label>
									<input
										type='TIME'
										className='form-control size'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Dimanche Midi</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Dimanche Aprem</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group size'>
									<Form.Label>Dimanche Soir</Form.Label>
									<input
										type='time'
										className='form-control size'
										placeholder='Lundi Soir'
									/>
								</div>
							</div>
						</Row>
					</Card.Body>
					<Card.Header className='title-form2'> Informations</Card.Header>
					<Card.Body className='center' >
						<div className='position'>
							<div className=' mt-3'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Date de Création'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Raison Sociale'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Statut'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Siret'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Siren'
									/>
								</div>
							</div>
						</div>
					</Card.Body>
					<Card.Header className='title-form2'>Gérant</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Nom'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Prenom'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Email'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Bis'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Voie'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Ville'
									/>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Telephone Fixe'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Telephone Port'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Numero'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Rue'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Complement'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='CP'
									/>
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form2'>Propriétaire</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Nom'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Prenom'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Email'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Bis'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Voie'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Ville'
									/>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Telephone Fixe'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Telephone Port'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Numero'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Rue'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Complement'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='CP'
									/>
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form2'> Comptabilité</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='C-A n1'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='C-A n2'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='C-A n3'
									/>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Employés'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Superficie'
									/>
								</div>
								<div className='form-group size mt-2 mb-3'>
									<Form.Label>Franchise</Form.Label>
									<Form.Select>
										<option>oui</option>
										<option>non</option>
									</Form.Select>
								</div>
							</Col>

							<div className='form-group '>
								<Form.Control
									className='size'
									as='textarea'
									placeholder='Ecrivez un commentaire'
									style={{ height: '150px' }}
								/>
							</div>
						</Row>
					</Card.Body>
				</Card>
				<div className='center'>
					<Button variant='primary' className='btn btn-sm btn-block mt-4'>
						Ajouter Commerce
					</Button>
				</div>
			</form>
			<div className='right mg-6'>
				<Link to='/'>
					<img className='img-next' src='/next.png' alt='next'></img>
				</Link>
			</div>
			<div className='scroll-to-top'>
				{isVisible && (
					<div onClick={scrollToTop} className='btn-top'>
						<img className='img' src='/arrow.png' alt='arrow'></img>
					</div>
				)}
			</div>
		</div>
	);
};

export default Addcommerce;
