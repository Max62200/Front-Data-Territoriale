import '../commerce/Addcommerce.css';
import { Form, Row, Col, Card, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Addcommerce = () => {
	const [isVisible, setIsVisible] = useState(false);

	const [commerceName, setCommerceName] = useState('Exemple');
	const [commerceNumber, setCommerceNumber] = useState(67);
	const [commerceBis, setCommerceBis] = useState('bis');
	const [commerceStreetType, setCommerceStreetType] = useState('rue');
	const [commerceStreetName, setCommerceStreetName] = useState('michel jocking');
	const [commerceComplement, setCommerceComplement] = useState('la bite');
	const [commercePostalCode, setCommercePostalCode] = useState(62200);
	const [commerceCity, setCommerceCity] = useState('Boulogne-sur-Mer');
	const [commerceLatitude, setCommerceLatitude] = useState(1.254456);
	const [commerceLongitude, setCommerceLongitude] = useState(123.58498463);
	const [commerceEmail, setCommerceEmail] = useState('jocking_michel@gmail.com');
	const [commercePhone, setCommercePhone] = useState();
	const [commerceFax, setCommerceFax] = useState();
	const [commerceTypology, setCommerceTypology] = useState('Alimentaire');
	const [commercePmr, setCommercePmr] = useState(false);

	const [infoDateCrea, setInfoDateCrea] = useState('2022-01-20T12:35:47.837Z');
	const [infoRS, setInfoRS] = useState('exempleRS');
	const [infoStatus, setInfoStatus] = useState('SARL');
	const [infoSiret, setInfoSiret] = useState();
	const [infoSiren, setInfoSiren] = useState();

	const [managerFName, setManagerFName] = useState('Petty');
	const [managerLName, setManagerLName] = useState('Florent');
	const [managerEmail, setManagerEmail] = useState('Florent@lol.com');
	const [managerBis, setManagerBis] = useState('Bis');
	const [managerStreetType, setManagerStreetType] = useState('rue');
	const [managerPhoneFix, setManagerPhoneFix] = useState();
	const [managerPhonePort, setManagerPhonePort] = useState();
	const [managerNumber, setManagerNumber] = useState(69);
	const [managerStreet, setManagerStreet] = useState('du velours bleu');
	const [managerComplement, setManagerComplement] = useState('du cul');
	const [managerCP, setManagerCP] = useState(62230);
	const [managerCity, setManagerCity] = useState('Paris');

	const [ownerFName, setOwnerFName] = useState('Filou');
	const [ownerLName, setOwnerLName] = useState('Mike');
	const [ownerEmail, setOwnerEmail] = useState('mike@lol.com');
	const [ownerBis, setOwnerBis] = useState('Bis');
	const [ownerStreetType, setOwnerStreetType] = useState('avenue');
	const [ownerCity, setOwnerCity] = useState('Bordeaux');
	const [ownerPhoneFix, setOwnerPhoneFix] = useState();
	const [ownerPhonePort, setOwnerPhonePort] = useState();
	const [ownerNumber, setOwnerNumber] = useState(89);
	const [ownerStreet, setOwnerStreet] = useState('du grand bleu');
	const [ownerComplement, setOwnerComplement] = useState('du trou');
	const [ownerCP, setOwnerCP] = useState(85420);

	const [comptaCAN1, setComptaCAN1] = useState(12544.56);
	const [comptaCAN2, setComptaCAN2] = useState(22544.56);
	const [comptaCAN3, setComptaCAN3] = useState(32544.56);
	const [comptaEmploy, setComptaEmploy] = useState(250);
	const [comptaSup, setComptaSup] = useState(150.22);
	const [comptaFranchise, setComptaFranchise] = useState(false);
	const [comptaCom, setComptaCom] = useState('ceci est une comptabilité genial !!!');

	const handleCommerce = (e) => {
		e.preventDefault();

		const token =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDMwMjk2NDIsImV4cCI6MTY0MzAzMzI0Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImRlbGFuc2F5LnNAZ21haWwuY29tIn0.BvAv7H1OGvRpicXSvBuAwBn6XUUn6KGkegBWiprFFD1q0XXUnUWVVkswWCpmHFzgNaK7PjB0LNC-EB1sBfvn_9cXs1zl7BRdjtGY6x3V-M7GtphfixH3xMZMlA1gvS4IqNqv9JLLo1MU487tnnn8QnUvpn9F3FPMe5b-ZAKcmUVquOUMZavCebFbOA4KjtP29Mx5UjIXzSJTolYeG0OcAQdsR27FI8lk8PZuLas6M0H0wOxHvb5XbiIjhWMLSvp8ocilP9X4fEx2Wef7aVrG7mDIHs99UKWheH_BRLQBHzFUuoQDUczsbSZfsfdOJQWAA9oXB-waKXU2W5aY-4msVg';

		axios
			.post(
				`${process.env.REACT_APP_API_URL}/api/commerces`,
				{
					nom: commerceName ? commerceName : null,
					numero: commerceNumber ? Number(commerceNumber) : null,
					bis: commerceBis ? commerceBis : null,
					voie: commerceStreetType ? commerceStreetType : null,
					rue: commerceStreetName ? commerceStreetName : null,
					complement: commerceComplement ? commerceComplement : null,
					postale: commercePostalCode ? Number(commercePostalCode) : null,
					ville: commerceCity ? commerceCity : null,
					latitude: commerceLatitude ? commerceLatitude : null,
					longitude: commerceLongitude ? commerceLongitude : null,
					email: commerceEmail ? commerceEmail : null,
					telephone: commercePhone ? Number(commercePhone) : null,
					fax: commerceFax ? Number(commerceFax) : null,
					typologie: commerceTypology ? commerceTypology : null,
					pmr: commercePmr,
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

			<form method='POST' onSubmit={handleCommerce} className=''>
				<Card className='text-center bd cardB'>
					<Card.Header className='title-form3'>COMMERCE</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<Row>
									<Col className='mg-4'>
										<div className='form-group'>
											<FloatingLabel label='Nom' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='Nom'
													onChange={(e) =>
														setCommerceName(e.target.value)
													}
													value={commerceName}
												/>
											</FloatingLabel>
										</div>

										<div className='form-group'>
											<FloatingLabel label='N°' className='size'>
												<input
													type='number'
													className='form-control size'
													placeholder='Numero'
													onChange={(e) =>
														setCommerceNumber(e.target.value)
													}
													value={commerceNumber}
												/>{' '}
											</FloatingLabel>
										</div>

										<div className='form-group'>
											{' '}
											<FloatingLabel label='Bis' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='bis'
													onChange={(e) => setCommerceBis(e.target.value)}
													value={commerceBis}
												/>{' '}
											</FloatingLabel>
										</div>

										<div className='form-group'>
											{' '}
											<FloatingLabel label='Voie' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='voie'
													onChange={(e) =>
														setCommerceStreetType(e.target.value)
													}
													value={commerceStreetType}
												/>{' '}
											</FloatingLabel>
										</div>

										<div className='form-group'>
											<FloatingLabel label='Rue' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='rue'
													onChange={(e) =>
														setCommerceStreetName(e.target.value)
													}
													value={commerceStreetName}
												/>{' '}
											</FloatingLabel>
										</div>

										<div className='form-group'>
											<FloatingLabel label='Complement' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='complement'
													onChange={(e) =>
														setCommerceComplement(e.target.value)
													}
													value={commerceComplement}
												/>{' '}
											</FloatingLabel>
										</div>

										<div className='form-group'>
											<FloatingLabel label='C.P' className='size'>
												<input
													type='number'
													className='form-control size'
													placeholder='CP'
													onChange={(e) =>
														setCommercePostalCode(e.target.value)
													}
													value={commercePostalCode}
												/>{' '}
											</FloatingLabel>
										</div>

										<div className='form-group'>
											<FloatingLabel label='Ville' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='Ville'
													onChange={(e) =>
														setCommerceCity(e.target.value)
													}
													value={commerceCity}
												/>{' '}
											</FloatingLabel>
										</div>
									</Col>
									<Col className='mg-4'>
										<div className='form-group'>
											<FloatingLabel label='Latitude' className='size'>
												<input
													type='number'
													step='0.01'
													className='form-control size'
													placeholder='Latitude'
													onChange={(e) =>
														setCommerceLatitude(e.target.value)
													}
													value={commerceLatitude}
												/>{' '}
											</FloatingLabel>
										</div>
										<div className='form-group'>
											<FloatingLabel label='Longitude' className='size'>
												<input
													type='number'
													step='0.01'
													className='form-control size'
													placeholder='Longitude'
													onChange={(e) =>
														setCommerceLongitude(e.target.value)
													}
													value={commerceLongitude}
												/>
											</FloatingLabel>
										</div>
										<div className='form-group'>
											<FloatingLabel label='Email' className='size'>
												<input
													type='email'
													className='form-control size'
													placeholder='email'
													onChange={(e) =>
														setCommerceEmail(e.target.value)
													}
													value={commerceEmail}
												/>
											</FloatingLabel>
										</div>
										<div className='form-group'>
											<FloatingLabel label='Telephone' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='Telephone'
													onChange={(e) =>
														setCommercePhone(e.target.value)
													}
													value={commercePhone}
												/>
											</FloatingLabel>
										</div>
										<div className='form-group'>
											<FloatingLabel label='FAX' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='FAX'
													onChange={(e) => setCommerceFax(e.target.value)}
													value={commerceFax}
												/>
											</FloatingLabel>
										</div>
										<div className='form-group'>
											<FloatingLabel label='Typologie' className='size'>
												<input
													type='text'
													className='form-control size'
													placeholder='Typologie'
													onChange={(e) =>
														setCommerceTypology(e.target.value)
													}
													value={commerceTypology}
												/>
											</FloatingLabel>
										</div>
										<div className='form-group size mt-3'>
											<Form.Label>Accés PMR</Form.Label>
											<Form.Select
												className='size'
												onChange={(e) => {
													if (e.target.value === 'true')
														setCommercePmr(true);
													else if (e.target.value === 'false')
														setCommercePmr(false);
													else setCommercePmr(false);
												}}
												defaultValue={commercePmr}>
												<option value={true}>oui</option>
												<option value={false}>non</option>
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
					<Card.Body className='center mb-2 mt-2'>
						<div className='position'>
							<div className=' '>
								<div className='form-group'>
									<FloatingLabel label='Date de création' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Date de Création'
											onChange={(e) => setInfoDateCrea(e.target.value)}
											value={infoDateCrea}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Raison Sociale' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Raison Sociale'
											onChange={(e) => setInfoRS(e.target.value)}
											value={infoRS}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Statut' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Statut'
											onChange={(e) => setInfoStatus(e.target.value)}
											value={infoStatus}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Siret' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Siret'
											onChange={(e) => setInfoSiret(e.target.value)}
											value={infoSiret}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Siren' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Siren'
											onChange={(e) => setInfoSiren(e.target.value)}
											value={infoSiren}
										/>
									</FloatingLabel>
								</div>
							</div>
						</div>
					</Card.Body>
					<Card.Header className='title-form2'>Gérant</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<div className='form-group'>
									<FloatingLabel label='Nom' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Nom'
											onChange={(e) => setManagerFName(e.target.value)}
											value={managerFName}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Prenom' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Prenom'
											onChange={(e) => setManagerLName(e.target.value)}
											value={managerLName}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Email' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Email'
											onChange={(e) => setManagerEmail(e.target.value)}
											value={managerEmail}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Bis' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Bis'
											onChange={(e) => setManagerBis(e.target.value)}
											value={managerBis}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Voie' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Voie'
											onChange={(e) => setManagerStreetType(e.target.value)}
											value={managerStreetType}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Ville' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Ville'
											onChange={(e) => setManagerCity(e.target.value)}
											value={managerCity}
										/>
									</FloatingLabel>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<FloatingLabel label='Tel. Fixe' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Tel Fixe'
											onChange={(e) => setManagerPhoneFix(e.target.value)}
											value={managerPhoneFix}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Tel. Port' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Tel Port'
											onChange={(e) => setManagerPhonePort(e.target.value)}
											value={managerPhonePort}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='N°' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Numero'
											onChange={(e) => setManagerNumber(e.target.value)}
											value={managerNumber}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Rue' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Rue'
											onChange={(e) => setManagerStreet(e.target.value)}
											value={managerStreet}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Complement' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Complement'
											onChange={(e) => setManagerComplement(e.target.value)}
											value={managerComplement}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='CP' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='CP'
											onChange={(e) => setManagerCP(e.target.value)}
											value={managerCP}
										/>
									</FloatingLabel>
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form2'>Propriétaire</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<div className='form-group'>
									<FloatingLabel label='Nom' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Nom'
											onChange={(e) => setOwnerFName(e.target.value)}
											value={ownerFName}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Prenom' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Prenom'
											onChange={(e) => setOwnerLName(e.target.value)}
											value={ownerLName}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Email' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Email'
											onChange={(e) => setOwnerEmail(e.target.value)}
											value={ownerEmail}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Bis' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Bis'
											onChange={(e) => setOwnerBis(e.target.value)}
											value={ownerBis}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Voie' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Voie'
											onChange={(e) => setOwnerStreetType(e.target.value)}
											value={ownerStreetType}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Ville' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Ville'
											onChange={(e) => setOwnerCity(e.target.value)}
											value={ownerCity}
										/>
									</FloatingLabel>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<FloatingLabel label='Tel. Fixe' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Tel Fixe'
											onChange={(e) => setOwnerPhoneFix(e.target.value)}
											value={ownerPhoneFix}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Tel. Port' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Tel Port'
											onChange={(e) => setOwnerPhonePort(e.target.value)}
											value={ownerPhonePort}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='N°' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Numero'
											onChange={(e) => setOwnerNumber(e.target.value)}
											value={ownerNumber}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Rue' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Rue'
											onChange={(e) => setOwnerStreet(e.target.value)}
											value={ownerStreet}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Comeplement' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Complement'
											onChange={(e) => setOwnerComplement(e.target.value)}
											value={ownerComplement}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='CP' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='CP'
											onChange={(e) => setOwnerCP(e.target.value)}
											value={ownerCP}
										/>
									</FloatingLabel>
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className='title-form2'> Comptabilité</Card.Header>
					<Card.Body>
						<Row className='mg-1'>
							<Col>
								<div className='form-group'>
									<FloatingLabel label='CA N-1' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='C-A n1'
											onChange={(e) => setComptaCAN1(e.target.value)}
											value={comptaCAN1}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='CA N-2' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='C-A n2'
											onChange={(e) => setComptaCAN2(e.target.value)}
											value={comptaCAN2}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='CA N-3' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='C-A n3'
											onChange={(e) => setComptaCAN3(e.target.value)}
											value={comptaCAN3}
										/>
									</FloatingLabel>
								</div>
							</Col>
							<Col>
								<div className='form-group'>
									<FloatingLabel label='Employés' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Employés'
											onChange={(e) => setComptaEmploy(e.target.value)}
											value={comptaEmploy}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									<FloatingLabel label='Superficie' className='size'>
										<input
											type='text'
											className='form-control size'
											placeholder='Superficie'
											onChange={(e) => setComptaSup(e.target.value)}
											value={comptaSup}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group size mt-2 mb-3'>
									<Form.Label>Franchise</Form.Label>
									<Form.Select
										className='size'
										onChange={(e) => {
											if (e.target.value === 'true') setComptaFranchise(true);
											else if (e.target.value === 'false')
												setComptaFranchise(false);
											else setComptaFranchise(false);
										}}
										defaultValue={comptaFranchise}>
										<option value={true}>oui</option>
										<option value={false}>non</option>
									</Form.Select>
								</div>
							</Col>

							<div className='form-group '>
								<FloatingLabel label='Commentaire' className='size'>
									<Form.Control
										className='size'
										as='textarea'
										placeholder='Ecrivez un commentaire'
										style={{ height: '150px' }}
										onChange={(e) => setComptaCom(e.target.value)}
										value={comptaCom}
									/>{' '}
								</FloatingLabel>
							</div>
						</Row>
					</Card.Body>
				</Card>
				<div className='center'>
					<Button type='submit' variant='warning' className='btn btn-sm btn-block mt-4'>
						Ajouter Commerce
					</Button>
				</div>
			</form>
			<div className='df'>
				<div>
					{isVisible && (
						<div onClick={scrollToTop} className=''>
							<img className='arrow' src='/arrow.png' alt='arrow'></img>
						</div>
					)}
				</div>
				<div>
					<Link to='/'>
						<img className='next' src='/next.png' alt='next'></img>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Addcommerce;
