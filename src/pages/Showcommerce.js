import { Card, Table, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Showcommerce.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { timeParser } from '../components/Utils';
import { dateTimeParser } from '../components/Utils';

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
							<Button variant='outline-secondary' className='btn btn-sm'>
								Modifier Commerce
							</Button>
						</Link>
					</div>
					<Card>
						<Card.Header className='title-form text-center'>
							Commerce - {commerceData.nom}
						</Card.Header>
						<Card.Body className=' mb-5'>
							<Row className='m5 mb-5'>
								<Col>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Nom : </Form.Label>{' '}
										{commerceData.nom}
									</Card.Text>

									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Numero : </Form.Label>{' '}
										{commerceData.numero}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Voie : </Form.Label>{' '}
										{commerceData.voie}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Rue : </Form.Label>{' '}
										{commerceData.rue}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>
											Complement :{' '}
										</Form.Label>{' '}
										{commerceData.complement}
									</Card.Text>
								</Col>
								<Col>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Bis : </Form.Label>{' '}
										{commerceData.bis}
									</Card.Text>

									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>
											Code Postal :{' '}
										</Form.Label>{' '}
										{commerceData.postale}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Ville : </Form.Label>{' '}
										{commerceData.ville}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Latitude : </Form.Label>{' '}
										{commerceData.latitude}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>
											Longitude :{' '}
										</Form.Label>{' '}
										{commerceData.longitude}
									</Card.Text>
								</Col>
								<Col>
									<Card.Text>
										<Form.Label className='label-color'>Email : </Form.Label>{' '}
										<a className='a-color' href='mailto:'>
											{commerceData.email}
										</a>
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>
											Telephone :{' '}
										</Form.Label>{' '}
										0{commerceData.telephone}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>FAX : </Form.Label>{' '}
										0{commerceData.fax}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>Type : </Form.Label>{' '}
										{commerceData.typologie}
									</Card.Text>
									<Card.Text className='label-nom'>
										<Form.Label className='label-color'>
											Accés PMR :{' '}
										</Form.Label>{' '}
										{commerceData.pmr}
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
										<Card.Text className='label-nom'>
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

									<Card.Text className='label-nom text-center'>
										<Form.Label className='label-color'>Statut : </Form.Label>{' '}
										{informationData.statut}
									</Card.Text>
									<Row className=' mb-5'>
										<Col>
											<Card.Text className='label-nom text-center'>
												<Form.Label className='label-color'>
													Date de création :{' '}
												</Form.Label>{' '}
												{dateTimeParser(informationData.datecrea)}
											</Card.Text>
											<Card.Text className='label-nom text-center'>
												<Form.Label className='label-color'>
													Siret :{' '}
												</Form.Label>{' '}
												{informationData.siret}
											</Card.Text>
										</Col>
										<Col>
											<Card.Text className='label-nom text-center'>
												<Form.Label className='label-color'>
													Raison Sociale :{' '}
												</Form.Label>{' '}
												{informationData.raisonsociale}
											</Card.Text>
											<Card.Text className='label-nom text-center'>
												<Form.Label className='label-color'>
													Siren :{' '}
												</Form.Label>{' '}
												{informationData.siren}
											</Card.Text>{' '}
										</Col>
									</Row>
								</>
							)}

							{gerantData && (
								<>
									<Card.Header className='title-form text-center'>
										{' '}
										Gérant COMMERCE
									</Card.Header>
									<Row className='text mb-5'>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Nom :{' '}
												</Form.Label>{' '}
												{gerantData.nom}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Prenom :{' '}
												</Form.Label>{' '}
												{gerantData.prenom}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Tel fixe :{' '}
												</Form.Label>{' '}
												0{gerantData.telfixe}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Tel port :{' '}
												</Form.Label>{' '}
												0{gerantData.telport}
											</Card.Text>{' '}
										</Col>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Numero :{' '}
												</Form.Label>{' '}
												{gerantData.numero}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Bis :{' '}
												</Form.Label>{' '}
												{gerantData.bis}
											</Card.Text>{' '}
											<Card.Text>
												<Form.Label className='label-color'>
													Email :{' '}
												</Form.Label>{' '}
												<a className='a-color' href='mailto:'>
													{gerantData.email}
												</a>
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Voie :{' '}
												</Form.Label>{' '}
												{gerantData.voie}
											</Card.Text>{' '}
										</Col>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Rue :{' '}
												</Form.Label>{' '}
												{gerantData.rue}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Complement :{' '}
												</Form.Label>{' '}
												{gerantData.complement}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Ville :{' '}
												</Form.Label>{' '}
												{gerantData.ville}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													CP :{' '}
												</Form.Label>{' '}
												{gerantData.postale}
											</Card.Text>{' '}
										</Col>
									</Row>{' '}
								</>
							)}
							{proprietaireData && (
								<>
									<Card.Header className='title-form text-center'>
										Propriétaire COMMERCE
									</Card.Header>
									<Row className='text mb-5'>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Nom :{' '}
												</Form.Label>{' '}
												{proprietaireData.nom}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Prenom :{' '}
												</Form.Label>{' '}
												{proprietaireData.prenom}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Tel fixe :{' '}
												</Form.Label>{' '}
												0{proprietaireData.telfixe}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Tel port :{' '}
												</Form.Label>{' '}
												0{proprietaireData.telport}
											</Card.Text>{' '}
										</Col>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Numero :{' '}
												</Form.Label>{' '}
												{proprietaireData.numero}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Bis :{' '}
												</Form.Label>{' '}
												{proprietaireData.bis}
											</Card.Text>{' '}
											<Card.Text>
												<Form.Label className='label-color'>
													Email :{' '}
												</Form.Label>{' '}
												<a className='a-color' href='mailto:'>
													{proprietaireData.email}
												</a>
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Voie :{' '}
												</Form.Label>{' '}
												{proprietaireData.voie}
											</Card.Text>{' '}
										</Col>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Rue :{' '}
												</Form.Label>{' '}
												{proprietaireData.rue}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Complement :{' '}
												</Form.Label>{' '}
												{proprietaireData.complement}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Ville :{' '}
												</Form.Label>{' '}
												{proprietaireData.ville}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													CP :{' '}
												</Form.Label>{' '}
												{proprietaireData.postale}
											</Card.Text>{' '}
										</Col>
									</Row>
								</>
							)}

							{comptabiliteData && (
								<>
									<Card.Header className='title-form text-center'>
										Comptabilité COMMERCE
									</Card.Header>
									<Row className='text-center'>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													CA N-1 :
												</Form.Label>{' '}
												{comptabiliteData.can1}€
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													CA N-2 :
												</Form.Label>{' '}
												{comptabiliteData.can2}€
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													CA N-3 :
												</Form.Label>{' '}
												{comptabiliteData.can3}€{' '}
											</Card.Text>{' '}
										</Col>
										<Col>
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Franchise :{' '}
												</Form.Label>{' '}
												{comptabiliteData.franchise}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Employes :{' '}
												</Form.Label>{' '}
												{comptabiliteData.employe}
											</Card.Text>{' '}
											<Card.Text className='label-nom'>
												<Form.Label className='label-color'>
													Superficie :{' '}
												</Form.Label>{' '}
												{comptabiliteData.superficie} m²
											</Card.Text>{' '}
										</Col>
									
										<Card.Text className='mt-3 text-center'>
											<Form.Label className='label-color'>
												Commentaire:{' '}
											</Form.Label>
										</Card.Text>
										<div className='label-nom text-center'>
											{comptabiliteData.commentaire}{' '}
										</div>
									</Row>{' '}
								</>
							)}
						</Card.Body>
					</Card>
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
