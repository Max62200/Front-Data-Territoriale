import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card2.css';

const card2 = ({ gerantData }) => {
	const { nom, prenom, telfixe, telport, email, id } = gerantData;

	return (
		<div className='card'>
			<Card className='text-center m-4'>
				<Card.Body className='cardB'>
					<Card.Title className='write22'>
						{nom} {prenom}
					</Card.Title>
					<Row>
						<Col>
							<Card.Text className='write22'>0{telfixe}</Card.Text>
						</Col>

						<Col>
							<Card.Text className='no-a22'>
								<a className='no-a' href='mailto:'>
									{email}
								</a>
							</Card.Text>
						</Col>
						<Col>
							<Card.Text className='write22'> 0{telport}</Card.Text>
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
