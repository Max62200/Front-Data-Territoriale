import './Home.css';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Container className='container1 '>
				<h1 className='H1'>MENU</h1>
				<div className='card'>
					<Card className='text-center m-4'>
						<Card.Body className=''>
							<Card.Title className='write'></Card.Title>
							<div className='d-grid gap-2'>
								<Link to='/homeCommerce'>
									<Button variant='primary' className='lg1' size='lg'>
										COMMERCES
									</Button>
								</Link>
								<Link to='/homegerant'>
									<Button variant='secondary' className='lg1' size='lg'>
										GERANTS
									</Button>
								</Link>
								<Link to='/homeproprietaire'>
									<Button variant='warning' className='lg1' size='lg'>
										PROPRIETAIRES
									</Button>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default Home;
