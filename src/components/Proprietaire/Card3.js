import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card3.css';

const card3 = ({ proprietaireData }) => {
	
	const { id } = proprietaireData;
	
	return (
		<div className=''>
		<Card className='text-center bd m-4'>
			<Card.Body className=''>
				<Card.Title className='write9'>
				{proprietaireData.nom ? proprietaireData.nom : 'N/A'} {proprietaireData.prenom ? proprietaireData.prenom : 'N/A'} 
				</Card.Title>
				<Row>
					<Col>
						<Card.Text className='write29'>0{proprietaireData.telfixe ? proprietaireData.telfixe : 'N/A'}</Card.Text>
					</Col>

					<Col>
						<Card.Text className='no-a29'>
							<a className='no-a' href='mailto:'>
								{proprietaireData.email ? proprietaireData.email : 'N/A'}
							</a>
						</Card.Text>
					</Col>
					<Col>
						<Card.Text className='write29'>0{proprietaireData.telport ? proprietaireData.telport : 'N/A'}</Card.Text>
					</Col>
				</Row>
				<Link to={`/showproprietaire/${id}`}>
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
