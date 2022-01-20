import '../gerant/Addgerant.css';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Addgerant = () => {

	return (
		<div className='merg2'>	<div className='R2'>
					<Link to='/'>
						<img className='next' src='/next.png' alt='next'></img>
					</Link>
				</div>
			<h1 className='H112'>Ajouter un gérant</h1>
			
				
			
		
			<form className=''>
				<Card className='text-center bd cardB'>
										
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
										placeholder='Tel Fixe'
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control size'
										placeholder='Tel Port'
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
										placeholder='Cplmt'
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
						Ajouter gérant
					</Button>
				</div>
			</form>
		
		</div>
	);
};

export default Addgerant;
