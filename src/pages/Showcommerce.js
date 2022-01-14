import { Card, Table, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Showcommerce.css';

const Showcommerce = () => {
	return (
		<>
			<Link to='/updatecommerce'>
				<Button variant='success' className='btn-add'>
					Modifier Commerce
				</Button>
			</Link>
			<Card className='text-center margin'>
				<Card.Header className='title-form'>NOM COMMERCE</Card.Header>
				<Card.Body>
					<Row className='mg-1'>
						<Col>
							<Card.Text>Adresse Compléte</Card.Text>
							<Card.Text>latitude</Card.Text>
							<Card.Text>Longitude</Card.Text>
							<Card.Text>Email</Card.Text>
						</Col>
						<Col>
							<Card.Text>Telephone</Card.Text>
							<Card.Text>Fax</Card.Text>
							<Card.Text>Typologie</Card.Text>
							<Card.Text>accés PMR</Card.Text>
						</Col>
					</Row>
					<Card.Header className='title-form'>Horaires COMMERCE</Card.Header>
					<Card.Text>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Jour</th>
									<th> matin</th>
									<th> midi</th>
									<th> aprem</th>
									<th> soir</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Lundi</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
								<tr>
									<td>Mardi</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
								<tr>
									<td>Mercredi</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
								<tr>
									<td>Jeudi</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
								<tr>
									<td>Vendredi</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
								<tr>
									<td>Samedi</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
								<tr>
									<td>Dimanche</td>
									<td>8h00</td>
									<td>12h00</td>
									<td>14h00</td>
									<td>19h00</td>
								</tr>
							</tbody>
						</Table>
					</Card.Text>
					<Card.Header className='title-form'>Informations COMMERCE</Card.Header>
					<Card.Text className='mt-3'>Date de Création</Card.Text>
					<Card.Text className='mt-3'>Raison Sociale</Card.Text>
					<Card.Text>Statut</Card.Text>
					<Card.Text>SIRET</Card.Text>
					<Card.Text>SIREN</Card.Text>
					<Card.Header className='title-form'> Gérant COMMERCE</Card.Header>
					<Row className='mg-1'>
						<Col>
							<Card.Text>Nom</Card.Text>
							<Card.Text>Prenom</Card.Text>
							<Card.Text>Téléphone Fixe</Card.Text>
							<Card.Text>Téléphone Portable</Card.Text>
							<Card.Text>Numéro</Card.Text>
							<Card.Text>Bis</Card.Text>
						</Col>
						<Col>
							<Card.Text>Email</Card.Text>
							<Card.Text>Voie</Card.Text>
							<Card.Text>Rue</Card.Text>
							<Card.Text>Complement</Card.Text>
							<Card.Text>Ville</Card.Text>
							<Card.Text>CP</Card.Text>
						</Col>
					</Row>
					<Card.Header className='title-form'>Propriétaire COMMERCE</Card.Header>
					<Row className='mg-1'>
						<Col>
							<Card.Text>Nom</Card.Text>
							<Card.Text>Prénom</Card.Text>
							<Card.Text>Téléphone Fixe</Card.Text>
							<Card.Text>Téléphone Portable</Card.Text>
							<Card.Text>Numéro</Card.Text>
							<Card.Text>Bis</Card.Text>
						</Col>
						<Col>
							<Card.Text>Email</Card.Text>
							<Card.Text>Voie</Card.Text>
							<Card.Text>Rue</Card.Text>
							<Card.Text>Complement</Card.Text>
							<Card.Text>Ville</Card.Text>
							<Card.Text>CP</Card.Text>
						</Col>
					</Row>
					<Card.Header className='title-form'>Comptabilité COMMERCE</Card.Header>
					<Row className='mg-1'>
						<Col>
							<Card.Text>Chiffres d'affaires N-1</Card.Text>
							<Card.Text>Chiffres d'affaires N-2</Card.Text>
							<Card.Text>Chiffres d'affaires N-3</Card.Text>
						</Col>
						<Col>
							<Card.Text>Franchise</Card.Text>
							<Card.Text>Employé</Card.Text>
							<Card.Text>Superficie</Card.Text>
						</Col>
						<Card.Text className='mt-3'>Commentaire</Card.Text>
					</Row>
				</Card.Body>
			</Card>
			<div className='img-next'>
				<Link to='/'><img src='/next.png' alt='next'></img></Link> 
			</div>
		</>
	);
};

export default Showcommerce;