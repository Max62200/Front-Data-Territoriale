import '../proprietaire/Updateproprietaire.css';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Updateproprietaire = () => {
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
			<h1>Modifier un proprietaire</h1>

			<form className=''>
				<Card className='text-center bd cardB'>
										
					<Card.Header className='title-form2'>Proprietaire</Card.Header>
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
				</Card>
				<div className='center'>
					<Button variant='warning' className='btn btn-sm btn-block mt-4'>
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
