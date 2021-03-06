import { Card, Table, Row, Col, Button, Form, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../commerce/Showcommerce.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { timeParser } from '../../components/Utils';
import { dateTimeParser } from '../../components/Utils';

const Showcommerce = () => {
	const commerceId = useParams()?.id;
	const [commerceData, setCommerceData] = useState(null);
	const [lundiData, setLundiData] = useState(null);
	const [mardiData, setMardiData] = useState(null);
	const [mercrediData, setMercrediData] = useState(null);
	const [jeudiData, setJeudiData] = useState(null);
	const [vendrediData, setVendrediData] = useState(null);
	const [samediData, setSamediData] = useState(null);
	const [dimancheData, setDimancheData] = useState(null);
	const informationId = useParams()?.id;
	const [informationData, setInformationData] = useState(null);
	const gerantId = useParams()?.id;
	const [gerantData, setGerantData] = useState(null);
	const proprietaireId = useParams()?.id;
	const [proprietaireData, setProprietaireData] = useState(null);
	const comptabiliteId = useParams()?.id;
	const [comptabiliteData, setComptabiliteData] = useState(null);
	const [show3, setShow3] = useState(false);

	const handleClose3 = () => setShow3(false);
	const handleShow3 = () => setShow3(true);

	useEffect(() => {
		const fetchCommerce = async () => {
			const resCommerce = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/commerces/${commerceId}`
			);

			setCommerceData(resCommerce.data);
		};
		if (!commerceData) fetchCommerce();

		const fetchInformation = async () => {
			const resInformation = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/information/${informationId}`
			);

			setInformationData(resInformation.data);
		};
		if (!informationData) fetchInformation();

		const fetchGerant = async () => {
			const resGerant = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/gerants/${gerantId}`
			);

			setGerantData(resGerant.data);
		};
		if (!gerantData) fetchGerant();

		const fetchProprietaire = async () => {
			const resProprietaire = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/proprietaires/${proprietaireId}`
			);

			setProprietaireData(resProprietaire.data);
		};
		if (!proprietaireData) fetchProprietaire();

		const fetchComptabilite = async () => {
			const resComptabilite = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/comptabilites/${comptabiliteId}`
			);

			setComptabiliteData(resComptabilite.data);
		};
		if (!comptabiliteData) fetchComptabilite();

		// Lundi
		const fetchLundi = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.lundi}`);
			setLundiData(res.data);
		};
		if (commerceData?.lundi) fetchLundi();

		// mardi
		const fetchMardi = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.mardi}`);
			setMardiData(res.data);
		};
		if (commerceData?.mardi) fetchMardi();

		// mercredi
		const fetchMercredi = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.mercredi}`);
			setMercrediData(res.data);
		};
		if (commerceData?.mercredi) fetchMercredi();

		// jeudi
		const fetchJeudi = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.jeudi}`);
			setJeudiData(res.data);
		};
		if (commerceData?.jeudi) fetchJeudi();

		// vendredi
		const fetchVendredi = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.vendredi}`);
			setVendrediData(res.data);
		};
		if (commerceData?.vendredi) fetchVendredi();

		// samedi
		const fetchSamedi = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.samedi}`);
			setSamediData(res.data);
		};
		if (commerceData?.samedi) fetchSamedi();

		// dimanche
		const fetchDimanche = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}${commerceData.dimanche}`);
			setDimancheData(res.data);
		};
		if (commerceData?.dimanche) fetchDimanche();
	}, [commerceId, commerceData]);

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
			{commerceData ? (
				<>
					<div className='btn-update'>
						<Link to='/updatecommerce'>
							<Button variant='warning' className='btn btn-sm'>
								Modifier Commerce
							</Button>
						</Link>
					</div>
					<Card className='bd'>
						<Card.Header className='title-form3 text-center'>
							{commerceData.nom}
						</Card.Header>
						<Card.Body className='mb-5 '>
							<Row className='mb-2'>
								<Col className=' ml-1 cl-4'>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Nom: </Form.Label>{' '}
										{commerceData.nom ? commerceData.nom : "N/A"}
									</Card.Text>

									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>N??: </Form.Label>{' '}
										{commerceData.numero ? commerceData.numero : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Voie: </Form.Label>{' '}
										{commerceData.voie ? commerceData.voie : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Rue: </Form.Label>{' '}
										{commerceData.rue ? commerceData.rue : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Cplt: </Form.Label>{' '}
										{commerceData.complement ? commerceData.complement : "N/A"}
									</Card.Text>
								</Col>
								<Col className=' ml-1'>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Bis: </Form.Label>{' '}
										{commerceData.bis ? commerceData.bis : "N/A"}
									</Card.Text>

									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>CP: </Form.Label>{' '}
										{commerceData.postale ? commerceData.postale : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Ville: </Form.Label>{' '}
										{commerceData.ville ? commerceData.ville : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Lat.: </Form.Label>{' '}
										{commerceData.latitude ? commerceData.latitude : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Long.: </Form.Label>{' '}
										{commerceData.longitude ? commerceData.longitude : "N/A"}
									</Card.Text>
								</Col>
								<Col className=' ml-1'>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Tel: </Form.Label> 0
										{commerceData.telephone ? commerceData.telephone : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>FAX: </Form.Label> 0
										{commerceData.fax ? commerceData.fax : "N/A"}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Type: </Form.Label>{' '}
										{commerceData.typologie ? commerceData.typologie : "N/A"}
									</Card.Text>{' '}
									{commerceData.pmr == 0 && (
										<Card.Text className='label-nom'>
											<Form.Label className='label-color'>
												PMR:{' NON '}
											</Form.Label>{' '}
											{commerceData.pmr}
										</Card.Text>
									)}
									{commerceData.pmr == 1 && (
										<Card.Text className='label-nom'>
											<Form.Label className='label-color'>
												PMR:{' OUI '}
											</Form.Label>{' '}
											{commerceData.pmr}
										</Card.Text>
									)}
									<Card.Text>
										<Form.Label className='label-color'>Email: </Form.Label>{' '}
										<a className='a-color' href='mailto:'>
											{commerceData.email ? commerceData.email : "N/A"}
										</a>
									</Card.Text>
								</Col>
							</Row>
							{lundiData &&
								mardiData &&
								mercrediData &&
								jeudiData &&
								vendrediData &&
								samediData &&
								dimancheData && (
									<>
										<Card.Header className='title-form text-center'>
											Horaires COMMERCE
										</Card.Header>
										<Card.Text className='label-nom3'>
											<Table responsive striped bordered hover>
												<thead>
													<tr>
														<th>Jour</th>
														<th>matin</th>
														<th>midi</th>
														<th>aprem</th>
														<th>soir</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Lundi</td>
														<td>
															{timeParser(lundiData.ouverturematin)}
														</td>
														<td>
															{timeParser(lundiData.fermeturematin)}
														</td>
														<td>
															{timeParser(lundiData.ouvertureaprem)}
														</td>
														<td>
															{timeParser(lundiData.fermetureaprem)}
														</td>
													</tr>
													<tr>
														<td>Mardi</td>
														<td>
															{timeParser(mardiData.ouverturematin)}
														</td>
														<td>
															{timeParser(mardiData.fermeturematin)}
														</td>
														<td>
															{timeParser(mardiData.ouvertureaprem)}
														</td>
														<td>
															{timeParser(mardiData.fermetureaprem)}
														</td>
													</tr>
													<tr>
														<td>Mercredi</td>
														<td>
															{timeParser(
																mercrediData.ouverturematin
															)}
														</td>
														<td>
															{timeParser(
																mercrediData.fermeturematin
															)}
														</td>
														<td>
															{timeParser(
																mercrediData.ouvertureaprem
															)}
														</td>
														<td>
															{timeParser(
																mercrediData.fermetureaprem
															)}
														</td>
													</tr>
													<tr>
														<td>Jeudi</td>
														<td>
															{timeParser(jeudiData.ouverturematin)}
														</td>
														<td>
															{timeParser(jeudiData.fermeturematin)}
														</td>
														<td>
															{timeParser(jeudiData.ouvertureaprem)}
														</td>
														<td>
															{timeParser(jeudiData.fermetureaprem)}
														</td>
													</tr>
													<tr>
														<td>Vendredi</td>
														<td>
															{timeParser(
																vendrediData.ouverturematin
															)}
														</td>
														<td>
															{timeParser(
																vendrediData.fermeturematin
															)}
														</td>
														<td>
															{timeParser(
																vendrediData.ouvertureaprem
															)}
														</td>
														<td>
															{timeParser(
																vendrediData.fermetureaprem
															)}
														</td>
													</tr>
													<tr>
														<td>Samedi</td>
														<td>
															{timeParser(samediData.ouverturematin)}
														</td>
														<td>
															{timeParser(samediData.fermeturematin)}
														</td>
														<td>
															{timeParser(samediData.ouvertureaprem)}
														</td>
														<td>
															{timeParser(samediData.fermetureaprem)}
														</td>
													</tr>
													<tr>
														<td>Dimanche</td>
														<td>
															{timeParser(
																dimancheData.ouverturematin
															)}
														</td>
														<td>
															{timeParser(
																dimancheData.fermeturematin
															)}
														</td>
														<td>
															{timeParser(
																dimancheData.ouvertureaprem
															)}
														</td>
														<td>
															{timeParser(
																dimancheData.fermetureaprem
															)}
														</td>
													</tr>
												</tbody>
											</Table>
										</Card.Text>
									</>
								)}
							{informationData && (
								<>
									<Card.Header className='title-form text-center'>
										Informations COMMERCE
									</Card.Header>
									<div className='center'>
										<Card.Text className='label-nom4 text-center'>
											<Form.Label className='label-color'>
												Statut :{' '}
											</Form.Label>{' '}
											{informationData.statut ? informationData.statut : "N/A"}
										</Card.Text>
									</div>
									<Row className=' mb-2'>
										<Col className=' ml-1'>
											<Card.Text className='label-nom4 text-center'>
												<Form.Label className='label-color'>
													Date de cr??ation :{' '}
												</Form.Label>{' '}
												{dateTimeParser(informationData.datecrea)}
											</Card.Text>
											<Card.Text className='label-nom4 text-center'>
												<Form.Label className='label-color'>
													Siret :{' '}
												</Form.Label>{' '}
												{informationData.siret ? informationData.siret : "N/A"}
											</Card.Text>
										</Col>
										<Col className=' ml-1'>
											<Card.Text className='label-nom4 text-center'>
												<Form.Label className='label-color'>
													Raison Sociale :{' '}
												</Form.Label>{' '}
												{informationData.raisonsociale ? informationData.raisonsociale : "N/A"}
											</Card.Text>
											<Card.Text className='label-nom4 text-center'>
												<Form.Label className='label-color'>
													Siren :{' '}
												</Form.Label>{' '}
												{informationData.siren ? informationData.siren : "N/A"}
											</Card.Text>{' '}
										</Col>
									</Row>
								</>
							)}

							{gerantData && (
								<>
									<Card.Header className='title-form text-center'>
										{' '}
										G??rant COMMERCE
									</Card.Header>
									<Row className='text mb-2'>
										<Col className=' ml-1'>
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Nom:{' '}
												</Form.Label>{' '}
												{gerantData.nom ? gerantData.nom : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Prenom:{' '}
												</Form.Label>{' '}
												{gerantData.prenom ? gerantData.prenom : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Tel fixe:{' '}
												</Form.Label>{' '}
												0{gerantData.telfixe ? gerantData.telfixe : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Tel port:{' '}
												</Form.Label>{' '}
												0{gerantData.telport ? gerantData.telport : "N/A"}
											</Card.Text>{' '}
										</Col>
										<Col className=' ml-1'>
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													N??:{' '}
												</Form.Label>{' '}
												{gerantData.numero ? gerantData.numero : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Bis:{' '}
												</Form.Label>{' '}
												{gerantData.bis ? gerantData.bis : "N/A"}
											</Card.Text>{' '}
											<Card.Text>
												<Form.Label className='label-color'>
													Email:{' '}
												</Form.Label>{' '}
												<a className='a-color' href='mailto:'>
													{gerantData.email ? gerantData.email : "N/A"}
												</a>
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Voie:{' '}
												</Form.Label>{' '}
												{gerantData.voie ? gerantData.voie : "N/A"}
											</Card.Text>{' '}
										</Col>
										<Col className=' ml-1'>
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Rue:{' '}
												</Form.Label>{' '}
												{gerantData.rue ? gerantData.rue : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Cplt :{' '}
												</Form.Label>{' '}
												{gerantData.complement ? gerantData.complement : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													Ville :{' '}
												</Form.Label>{' '}
												{gerantData.ville ? gerantData.ville : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom5'>
												<Form.Label className='label-color'>
													CP :{' '}
												</Form.Label>{' '}
												{gerantData.postale ? gerantData.postale : "N/A"}
											</Card.Text>{' '}
										</Col>
									</Row>{' '}
								</>
							)}
							{proprietaireData && (
								<>
									<Card.Header className='title-form text-center'>
										Propri??taire COMMERCE
									</Card.Header>
									<Row className='text mb-2'>
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
													N??:{' '}
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
								</>
							)}

							{comptabiliteData && (
								<>
									<Card.Header className='title-form text-center'>
										Comptabilit?? COMMERCE
									</Card.Header>
									<Row className='text-center'>
										<Col>
											<Card.Text className='label-nom7'>
												<Form.Label className='label-color'>
													CA N-1 :
												</Form.Label>{' '}
												{comptabiliteData.can1 ? comptabiliteData.can1 : "N/A"}???
											</Card.Text>{' '}
											<Card.Text className='label-nom7'>
												<Form.Label className='label-color'>
													CA N-2 :
												</Form.Label>{' '}
												{comptabiliteData.can2 ? comptabiliteData.can2 : "N/A"}???
											</Card.Text>{' '}
											<Card.Text className='label-nom7'>
												<Form.Label className='label-color'>
													CA N-3 :
												</Form.Label>{' '}
												{comptabiliteData.can3 ? comptabiliteData.can3 : "N/A"}???
											</Card.Text>{' '}
										</Col>
										<Col>
											{comptabiliteData.franchise == 0 && (
												<Card.Text className='label-nom7'>
													<Form.Label className='label-color'>
														Franchise :{' NON '}
													</Form.Label>{' '}
													{comptabiliteData.franchise}
												</Card.Text>
											)}
											{comptabiliteData.franchise == 1 && (
												<Card.Text className='label-nom7'>
													<Form.Label className='label-color'>
														Franchise :{' OUI '}
													</Form.Label>{' '}
													{comptabiliteData.franchise}
												</Card.Text>
											)}
											<Card.Text className='label-nom7'>
												<Form.Label className='label-color'>
													Employes :{' '}
												</Form.Label>{' '}
												{comptabiliteData.employe ? comptabiliteData.employe : "N/A"}
											</Card.Text>{' '}
											<Card.Text className='label-nom7'>
												<Form.Label className='label-color'>
													Superficie :{' '}
												</Form.Label>{' '}
												{comptabiliteData.superficie ? comptabiliteData.superficie : "N/A"} m??
											</Card.Text>{' '}
										</Col>

										<Card.Text className='mt-3 text-center'>
											<Form.Label className='label-color'>
												Commentaire:{' '}
											</Form.Label>
										</Card.Text>
										<div className='label-nom7 text-center'>
											{comptabiliteData.commentaire ? comptabiliteData.commentaire : "N/A"}
										</div>
									</Row>{' '}
								</>
							)}
						</Card.Body>
					</Card>
					<div className='center'>
						<Button variant='danger' className='btn btn-sm' onClick={handleShow3}>
							Supprimer
						</Button>
					</div>

					<Modal show={show3} onHide={handleClose3}>
						<Modal.Header closeButton>
							<Modal.Title>Supprimer</Modal.Title>
						</Modal.Header>
						<Modal.Body>Voulez-vous supprimer le Commerce ?</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose3}>
								Fermer
							</Button>
							<Button variant='danger' onClick={handleClose3}>
								Supprimer
							</Button>
						</Modal.Footer>
					</Modal>
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

export default Showcommerce;
