import './Register.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Register = () => {
	return (
		<div>
			<h1>Inscription</h1>
			<div className='center'>
				<form>
					<Card className='card-log'>
						<Card.Body>
							<div className='form-group'>
								<input type='text' className='form-control' placeholder='Nom' />
							</div>

							<div className='form-group'>
								<input type='text' className='form-control' placeholder='Prenom' />
							</div>

							<div className='form-group'>
								<input type='email' className='form-control' placeholder='Email' />
							</div>

							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									placeholder='Password'
								/>
							</div>

							<button type='submit' className='btn btn-primary btn-block mt-4 center'>
								S'inscrire
							</button>
						</Card.Body>
					</Card>
				</form>
			</div>
			<div className='img-next'>
				<Link to='/'>
					<img src='/next.png' alt='next'></img>
				</Link>
			</div>
		</div>
	);
};

export default Register;
