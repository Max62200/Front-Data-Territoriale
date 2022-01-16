import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const card = ({ data }) => {
	const { nom, typologie, telephone, email } = data;

	return (

		<div className="card">
		<Card className='text-center m-5'>
			<Card.Header></Card.Header>
			<Card.Body>
				<Card.Title>{nom}</Card.Title>
				<Card.Text>{typologie}</Card.Text>
				<Card.Text>{telephone}</Card.Text>
				<Card.Text>{email}</Card.Text>
				<Link className='no-color' to='/showcommerce'>
					<Button className='btn btn-sm' variant='primary'>Afficher plus</Button>
				</Link>
			</Card.Body>
		</Card></div>
	);
};

export default card;
