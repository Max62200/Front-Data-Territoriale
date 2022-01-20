import './Register.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Register = () => {
	return (
		<div className="merge22">
			<h1 className='H1'>Inscription</h1>
			<div className='center'>
				<form className='merge33'>
					<Card className='card-log '>
						<Card.Body>
							<div className=''>
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
										type='email'
										className='form-control size'
										placeholder='Email'
									/>
								</div>

								<div className='form-group'>
									<input
										type='password'
										className='form-control size'
										placeholder='Password'
									/>
								</div>
							</div>
							<div className='center'>
								<button type='submit' className='size btn btn-primary btn-block mt-4 '>
									S'inscrire
								</button>
							
							<Link to='/'>
							<button className='size btn btn-secondary btn-block mt-4 '>
								Retour
							</button>
						</Link></div>
						</Card.Body>
					</Card>
				</form>
			</div>
			
		</div>
	);
};

export default Register;
