import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const card = ({ data }) => {
	const { name, type, phone, address } = data;

	return (
		
			<Card className='text-center margin'>
				<Card.Header></Card.Header>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{type}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                    <Card.Text>{address}</Card.Text>
					<Link className='no-color' to='/show'><Button variant='primary'>Afficher plus</Button></Link>
				</Card.Body>
			</Card>
		
	);
};

export default card;
