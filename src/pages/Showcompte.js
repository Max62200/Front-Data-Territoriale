import './Showcompte.css';
import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Showcompte = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	return (
		<div>
			<h1>Informations du compte</h1>

			<Card className='card-show' style={{ width: '20rem' }}>
				<Card.Body>
					<Card.Title className='mg'>MAXIME - DELANSAY</Card.Title>
					<Card.Subtitle className='mb-2 text-muted mg'>MaximeD@gmail.com</Card.Subtitle>

					<Button variant='primary' className='mg2' onClick={handleShow}>
						Modifier
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Modifier Compte</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<form>
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
										type='email'
										className='form-control'
										placeholder='Email'
									/>
								</div>

								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='Password'
									/>
								</div>
							</form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Fermer
							</Button>
							<Button variant='success' onClick={handleClose}>
								Sauvegarder
							</Button>
						</Modal.Footer>
					</Modal>
					<Button variant='danger' onClick={handleShow2}>
						Supprimer
					</Button>
					<Modal show={show2} onHide={handleClose2}>
						<Modal.Header closeButton>
							<Modal.Title>Supprimer le Compte</Modal.Title>
						</Modal.Header>
						<Modal.Body>Voulez vous vraiment suprrimer le compte?</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose2}>
								Fermer
							</Button>
							<Button variant='danger' onClick={handleClose2}>
								Supprimer
							</Button>
						</Modal.Footer>
					</Modal>
				</Card.Body>
			</Card>

			<div className='img-next'>
				<Link to='/'>
					<img src='/next.png' alt='next'></img>
				</Link>
			</div>
		</div>
	);
};

export default Showcompte;