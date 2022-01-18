import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const card = ({ commerceData }) => {
	
	const { nom, typologie, telephone, email, id } = commerceData;

	return (
		<div className='card'>
			<Card className='text-center m-5 card2'>
				<Card.Body className=''>
					<Card.Title className='write'>{nom}</Card.Title>
					<Row>
						<Col>
							<Card.Text className='write2'>0{telephone}</Card.Text>
						</Col>
						<Col>
							<Card.Text className='write2'> {typologie}</Card.Text>
						</Col>
						<Col>
							<Card.Text className='no-a'>
								<a className='no-a' href='mailto:'>
									{email}
								</a>
							</Card.Text>
						</Col>
					</Row>
					<Link to={`/showcommerce/${id}`}>
						<Button className='btn btn-sm' variant='primary'>
							Afficher plus
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default card;
