import './Register.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

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
							</div>
						</Card.Body>
					</Card>
				</form>
			</div>
			<div className='img-next2'>
				<Link to='/'>
					<img className='size2' src='/next.png' alt='next'></img>
				</Link>
			</div>
		</div>
	);
};

export default Register;
