import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const card3 = ({ proprietaireData }) => {
	
	const { nom, prenom, telfixe, telport, email, id } = proprietaireData;
	
	return (
		<div className='card'>
		<Card className='text-center m-4'>
			<Card.Body className='cardB'>
				<Card.Title className='write'>
					{nom} {prenom}
				</Card.Title>
				<Row>
					<Col>
						<Card.Text className='write2'>0{telfixe}</Card.Text>
					</Col>

					<Col>
						<Card.Text className='no-a2'>
							<a className='no-a' href='mailto:'>
								{email}
							</a>
						</Card.Text>
					</Col>
					<Col>
						<Card.Text className='write2'> 0{telport}</Card.Text>
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

export default card3;
