import { Card, Modal, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../gerant/Showgerant.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { timeParser } from '../../components/Utils';
import { dateTimeParser } from '../../components/Utils';

const Showgerant = () => {
	const gerantId = useParams()?.id;
	const [gerantData, setGerantData] = useState(null);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	useEffect(() => {
		const fetchGerant = async () => {
			const resGerant = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/gerants/${gerantId}`
			);

			setGerantData(resGerant.data);
		};
		if (!gerantData) fetchGerant();
	}, [gerantId, gerantData]);

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
			{gerantData ? (
				<>
					<div className='c4 '>
						<Card className='bd'>
							<Card.Body className='mb-5 '>
								{gerantData && (
									<>
										<Card.Header className='title-form text-center'>
											{' '}
											Gérant COMMERCE
										</Card.Header>
										<Row className=' mb-2'>
											<Col className=' ml-1'>
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Nom:{' '}
													</Form.Label>{' '}
													{gerantData.nom}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Prenom:{' '}
													</Form.Label>{' '}
													{gerantData.prenom}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Tel fixe:{' '}
													</Form.Label>{' '}
													0{gerantData.telfixe}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Tel port:{' '}
													</Form.Label>{' '}
													0{gerantData.telport}
												</Card.Text>{' '}
											</Col>
											<Col className=' ml-1'>
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														N°:{' '}
													</Form.Label>{' '}
													{gerantData.numero}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Bis:{' '}
													</Form.Label>{' '}
													{gerantData.bis}
												</Card.Text>{' '}
												<Card.Text>
													<Form.Label className='label-color'>
														Email:{' '}
													</Form.Label>{' '}
													<a className='a-color' href='mailto:'>
														{gerantData.email}
													</a>
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Voie:{' '}
													</Form.Label>{' '}
													{gerantData.voie}
												</Card.Text>{' '}
											</Col>
											<Col className=' ml-1'>
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Rue:{' '}
													</Form.Label>{' '}
													{gerantData.rue}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Cplt :{' '}
													</Form.Label>{' '}
													{gerantData.complement}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														Ville :{' '}
													</Form.Label>{' '}
													{gerantData.ville}
												</Card.Text>{' '}
												<Card.Text className='label-nom5'>
													<Form.Label className='label-color'>
														CP :{' '}
													</Form.Label>{' '}
													{gerantData.postale}
												</Card.Text>{' '}
											</Col>
										</Row>{' '}
										<div className='df2'>
											<div>
												<Link to='/updategerant'>
													<Button
														variant='warning'
														className='btn btn-sm'>
														Modifier
													</Button>
												</Link>
											</div>
											<div>
												<Button
													variant='danger'
													className='btn btn-sm'
													onClick={handleShow2}>
													Supprimer
												</Button>
											</div>
										</div>
										<Modal show={show2} onHide={handleClose2}>
											<Modal.Header closeButton>
												<Modal.Title>Supprimer</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												Voulez-vous supprimer le Gérant ?
											</Modal.Body>
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

export default Showgerant;
