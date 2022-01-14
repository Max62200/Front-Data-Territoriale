import './Addcommerce.css';
import { Form, Row, Col, Card, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Addcommerce = () => {
	return (
		<div>
			<h1>Ajouter un commerce</h1>

			<form className='mg-5'>
				<Card className='text-center margin'>
					<Card.Header className="title-form">COMMERCE</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<Row>
									<Col className='mg-4'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Nom'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Numero'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='bis'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='voie'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='rue'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='complement'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='CP'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Ville'
											/>
										</div>
									</Col>
									<Col className='mg-4'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Latitude'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Longitude'
											/>
										</div>
										<div className='form-group'>
											<input
												type='email'
												className='form-control'
												placeholder='email'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Telephone'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='FAX'
											/>
										</div>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Typologie'
											/>
										</div>
										<div className='form-group'>
											<Form.Label>Accés PMR</Form.Label>
											<Form.Select>
												<option>oui</option>
												<option>non</option>
											</Form.Select>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className="title-form">Horaires</Card.Header>
					<Card.Body>
						<Row>
							<Col>
								<div className='form-group'>
								<Form.Label>lundi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>lundi Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>lundi Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>lundi Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>

							<Col>
							<div className='form-group'>
								<Form.Label>mardi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='mardi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>mardi Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='mardi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>mardi Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='mardi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Mardi Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Mardi Soir'
									/>
								</div>
							</Col>
							<Col>
							<div className='form-group'>
								<Form.Label>Mercredi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Mercredi Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Mercredi Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Mercredi Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>
						</Row>
						<Row className='mt-5'>
							<Col>
							<div className='form-group'>
								<Form.Label>Jeudi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Jeudi Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Jeudi Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Jeudi Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>

							<Col>
							<div className='form-group'>
								<Form.Label>Vendredi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Vendredi Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Vendredi Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Vendredi Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>
							<Col>
							<div className='form-group'>
								<Form.Label>Samedi Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Samedi Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Samedi Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Samedi Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Soir'
									/>
								</div>
							</Col>
						</Row>
						<div className='center mt-5 mg-3'>
						<div className='form-group'>
								<Form.Label>Dimanche Matin</Form.Label>
									<input
										type='TIME'
										className='form-control'
										placeholder='Lundi Matin'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Dimanche Midi</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Midi'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Dimanche Aprem</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Aprem'
									/>
								</div>
								<div className='form-group'>
								<Form.Label>Dimanche Soir</Form.Label>
									<input
										type='time'
										className='form-control'
										placeholder='Lundi Soir'
									/>
								</div>
						</div>
					</Card.Body>
					<Card.Header className='title-form'> Informations</Card.Header>
					<Card.Body>
						<div className='center mt-3 mg-3'>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									placeholder='Date de Création'
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									placeholder='Raison Sociale'
								/>
							</div>
							<div className='form-group'>
								<input type='text' className='form-control' placeholder='Statut' />
							</div>
							<div className='form-group'>
								<input type='text' className='form-control' placeholder='Siret' />
							</div>
							<div className='form-group'>
								<input type='text' className='form-control' placeholder='Siren' />
							</div>
						</div>
					</Card.Body>
					<Card.Header className='title-form'>Gérant</Card.Header>
					<Card.Body>
						<Row>
							<Col>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Nom' />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Prenom'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Email'
									/>
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Bis' />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Voie'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Ville'
									/>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Telephone Fixe'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Telephone Port'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Numero'
									/>
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Rue' />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Complement'
									/>
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='CP' />
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form'>Propriétaire</Card.Header>
					<Card.Body>
						<Row>
							<Col>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Nom' />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Prenom'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Email'
									/>
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Bis' />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Voie'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Ville'
									/>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Telephone Fixe'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Telephone Port'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Numero'
									/>
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Rue' />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Complement'
									/>
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='CP' />
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form'> Comptabilité</Card.Header>
					<Card.Body>
						<Row>
							<Col>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Chiffres d affaires N-1'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Chiffres d affaires N-2'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Chiffres d affaires N-3'
									/>
								</div>
							</Col>
							<Col>
								
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Employés'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Superficie'
									/>
								</div>
                                <div className='form-group'>
									<Form.Label>Franchise</Form.Label>
									<Form.Select>
										<option>oui</option>
										<option>non</option>
									</Form.Select>
								</div>
							</Col>

							<div className='form-group'>
								<Form.Control
									as='textarea'
									placeholder='Ecrivez un commentaire'
									style={{ height: '150px' }}
								/>
							</div>
						</Row>
					</Card.Body>
				</Card>
				<button type='submit' className='btn btn-primary center btn-block mt-4'>
					Ajouter Commerce
				</button>
			</form>
            <div className='img-next'>
				<Link to='/'><img src='/next.png' alt='next'></img></Link> 
			</div>
		</div>
	);
};

export default Addcommerce;
