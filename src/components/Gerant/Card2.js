import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card2.css';

const card2 = ({ gerantData }) => {
	const { id } = gerantData;

	return (
		<div className=''>
			<Card className='text-center bd m-4'>
				<Card.Body className=''>
					<Card.Title className='write22'>
					{gerantData.nom ? gerantData.nom : 'N/A'} {gerantData.prenom ? gerantData.prenom : 'N/A'} 
					</Card.Title>
					<Row>
						<Col>
							<Card.Text className='write22'>0{gerantData.telfixe ? gerantData.telfixe : 'N/A'} </Card.Text>
						</Col>

						<Col>
							<Card.Text className='no-a22'>
								<a className='no-a' href='mailto:'>
								{gerantData.email ? gerantData.email : 'N/A'}
								</a>
							</Card.Text>
						</Col>
						<Col>
							<Card.Text className='write22'> 0{gerantData.telport ? gerantData.telport : 'N/A'}</Card.Text>
						</Col>
					</Row>
					<Link to={`/showgerant/${id}`}>
						<Button className='btn btn-sm' variant='primary'>
							Afficher plus
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default card2;
