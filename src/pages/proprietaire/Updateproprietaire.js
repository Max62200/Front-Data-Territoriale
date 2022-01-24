import '../proprietaire/Updateproprietaire.css';
import { FloatingLabel, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Updateproprietaire = () => {
	const [isVisible, setIsVisible] = useState(false);

	const [ownerFName, setOwnerFName] = useState('');
	const [ownerLName, setOwnerLName] = useState('');
	const [ownerEmail, setOwnerEmail] = useState('');
	const [ownerBis, setOwnerBis] = useState('');
	const [ownerStreetType, setOwnerStreetType] = useState('');
	const [ownerCity, setOwnerCity] = useState('');
	const [ownerPhoneFix, setOwnerPhoneFix] = useState();
	const [ownerPhonePort, setOwnerPhonePort] = useState();
	const [ownerNumber, setOwnerNumber] = useState();
	const [ownerStreet, setOwnerStreet] = useState('');
	const [ownerComplement, setOwnerComplement] = useState('');
	const [ownerCP, setOwnerCP] = useState();
	const id = useParams()?.id;

	const patchOwner = (e) => {
		e.preventDefault();

		const token =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI3NjA2OTIsImV4cCI6MTY0Mjc2NDI5Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImRlbGFuc2F5LnNAZ21haWwuY29tIn0.hw7so6k9910Qiqi0GacepHlBY3hVZA44HT_3iPM31w5yxlfnzAzzIamYGQNwCaYW-gJGXmEbri4Ys9GEqBT4UfP_70hYZW870yRlwSYcioU00ATtVMaOLRprZYnP0l9sRjApJDFTFeiNPN2VEaoJN99u1hHit_Z4NH_IpBS_Lrb8wJQS4OF_JsLACv1gGRWfXfgZqa79CPqWZMK2tbovpyww8Rck1kRelnckLaKMg1E0gEKtTNXUZsYdYyoyEEOvav4NpgcGEaFi_2aBd6MJ-qohVWCfHsBeoESqghEjMevjg6CaAv9Z5wljzFeBpV4cSvpi89xFGock3akYLyOGcQ';

		axios
			.put(
				`${process.env.REACT_APP_API_URL}/api/proprietaires/${id}`,
				{
					nom: ownerFName ? ownerFName : null,
					prenom: ownerLName ? ownerLName : null,
					bis: ownerBis ? ownerBis : null,
					voie: ownerStreetType ? ownerStreetType : null,
					rue: ownerStreet ? ownerStreet : null,
					complement: ownerComplement ? ownerComplement : null,
					postale: ownerCP ? Number(ownerCP) : null,
					ville: ownerCity ? ownerCity : null,
					email: ownerEmail ? ownerEmail : null,
					telfixe: ownerPhoneFix ? Number(ownerPhoneFix) : null,
					telport: ownerPhonePort ? Number(ownerPhonePort) : null,
					numero: ownerNumber ? Number(ownerNumber) : null,
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
			<h1>Modifier un proprietaire</h1>

			<form method='PUT' onSubmit={patchOwner} className=''>
				<Card className='text-center bd merg'>
					<Card.Header className='title-form2'>Proprietaire</Card.Header>
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
											onChange={(e) => setOwnerFName(e.target.value)}
											value={ownerFName}
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
											onChange={(e) => setOwnerLName(e.target.value)}
											value={ownerLName}
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
											onChange={(e) => setOwnerEmail(e.target.value)}
											value={ownerEmail}
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
											onChange={(e) => setOwnerBis(e.target.value)}
											value={ownerBis}
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
											onChange={(e) => setOwnerStreetType(e.target.value)}
											value={ownerStreetType}
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
											onChange={(e) => setOwnerCity(e.target.value)}
											value={ownerCity}
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
											onChange={(e) => setOwnerPhoneFix(e.target.value)}
											value={ownerPhoneFix}
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
											onChange={(e) => setOwnerPhonePort(e.target.value)}
											value={ownerPhonePort}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='N°' className='size'>
										<input
											type='number'
											className='form-control size'
											placeholder='Numero'
											onChange={(e) => setOwnerNumber(e.target.value)}
											value={ownerNumber}
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
											onChange={(e) => setOwnerStreet(e.target.value)}
											value={ownerStreet}
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
											onChange={(e) => setOwnerComplement(e.target.value)}
											value={ownerComplement}
										/>
									</FloatingLabel>
								</div>
								<div className='form-group'>
									{' '}
									<FloatingLabel label='CP' className='size'>
										<input
											type='number'
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
				</Card>
				<div className='center'>
					<Button type='submit' variant='warning' className='btn btn-sm btn-block mt-4'>
						Modifier proprietaire
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

export default Updateproprietaire;
