import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const card = ({ commerceData }) => {
	const { id } = commerceData;

	return (
		<div className=''>
			<Card className='text-center m-4 bd'>
				<Card.Body className=''>
					<Card.Title className='write'> {commerceData.nom ? commerceData.nom : 'N/A'}</Card.Title>
					<Row>
						<Col>
							<Card.Text className='write2'>
								0{commerceData.telephone ? commerceData.telephone : 'N/A'}
							</Card.Text>
						</Col>
						<Col>
							<Card.Text className='write2'> {commerceData.typologie ? commerceData.typologie : 'N/A'}</Card.Text>
						</Col>
						<Col>
							<Card.Text className=''>
								<a className='no-a' href='mailto:'>
								{commerceData.email ? commerceData.email : 'N/A'}
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
