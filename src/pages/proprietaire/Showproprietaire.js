import { Card, Modal, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../proprietaire/Showproprietaire.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Showproprietaire = () => {
	const proprietaireId = useParams()?.id;
	const [proprietaireData, setProprietaireData] = useState(null);

	

	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	useEffect(() => {
		const fetchProprietaire= async () => {
			const resProprietaire = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/proprietaires/${proprietaireId}`
			);

			setProprietaireData(resProprietaire.data);
		};
		if (!proprietaireData) fetchProprietaire();
	}, [proprietaireId, proprietaireData]);

	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
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
		<>
			{proprietaireData ? (
				<>
				<div className='c4 '>
						<Card className='bd'>
							<Card.Body className='mb-5 '>
								{proprietaireData && (
									<>
										<Card.Header className='title-form text-center'>
											{' '}
											Prorietaire COMMERCE
										</Card.Header>
									<Row className=' mb-2'>
										<Col className=' ml-1'>
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Nom:{' '}
												</Form.Label>{' '}
												{proprietaireData.nom ? proprietaireData.nom : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Prenom:{' '}
												</Form.Label>{' '}
												{proprietaireData.prenom ? proprietaireData.prenom : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Tel fixe:{' '}
												</Form.Label>{' '}
												0{proprietaireData.telfixe ? proprietaireData.telfixe : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Tel port:{' '}
												</Form.Label>{' '}
												0{proprietaireData.telport ? proprietaireData.telport : "N/A"}
											</Card.Text>{' '}
										</Col>
										<Col className=' ml-1'>
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													N°:{' '}
												</Form.Label>{' '}
												{proprietaireData.numero ? proprietaireData.numero : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Bis:{' '}
												</Form.Label>{' '}
												{proprietaireData.bis ? proprietaireData.bis : "N/A"}
											</Card.Text>{' '}
											<Card.Text>
												<Form.Label className='label-color'>
													Email:{' '}
												</Form.Label>{' '}
												<a className='a-color' href='mailto:'>
													{proprietaireData.email ? proprietaireData.email : "N/A"}
												</a>
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Voie:{' '}
												</Form.Label>{' '}
												{proprietaireData.voie ? proprietaireData.voie : "N/A"}
											</Card.Text>{' '}
										</Col>
										<Col className=' ml-1'>
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Rue:{' '}
												</Form.Label>{' '}
												{proprietaireData.rue ? proprietaireData.rue : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Cplt :{' '}
												</Form.Label>{' '}
												{proprietaireData.complement ? proprietaireData.complement : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Ville :{' '}
												</Form.Label>{' '}
												{proprietaireData.ville ? proprietaireData.ville : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													CP :{' '}
												</Form.Label>{' '}
												{proprietaireData.postale ? proprietaireData.postale : "N/A"}
											</Card.Text>{' '}
										</Col>
									</Row>{' '}
									<div className='df2'>
										<div>
											<Link to={`/updateproprietaire/${proprietaireId}`}>
												<Button variant='warning' className='btn btn-sm'>
													Modifier 
												</Button>
											</Link>
										</div>
										<div>
											<Button variant='danger' className='btn btn-sm' onClick={handleShow2}>
												Supprimer
											</Button>
										</div>
									</div>
									<Modal show={show2} onHide={handleClose2}>
										<Modal.Header closeButton>
											<Modal.Title>Supprimer</Modal.Title>
										</Modal.Header>
										<Modal.Body>Voulez-vous supprimer le Proprietaire ?</Modal.Body>
										<Modal.Footer>
											<Button variant='secondary' onClick={handleClose2}>
												Fermer
											</Button>
											<Button variant='danger' onClick={handleClose2}>
												Supprimer
											</Button>
										</Modal.Footer>
									</Modal>
								</>
							)}
						</Card.Body>
						</Card>
						<div className='df'>
							<div>
								{isVisible && (
									<div onClick={scrollToTop} className=''>
										<img className='arrow' src='/arrow.png' alt='arrow'></img>
									</div>
								)}
							</div>
							<div className=''>
								<Link to='/'>
									<img className='next' src='/next.png' alt='next'></img>
								</Link>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden text-center mt-5'>Loading...</span>
					</Spinner>
				</>
			)}
		</>
	);
};
export default Showproprietaire;
