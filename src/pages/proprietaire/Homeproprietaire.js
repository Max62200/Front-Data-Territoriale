import { useState, useEffect } from 'react';
import axios from 'axios';
import './Homeproprietaire.css';
import Card3 from '../../components/Proprietaire/Card';
import Pagination from 'react-bootstrap/Pagination';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homeproprietaire = () => {
	const [proprietaireData, setProprietaireData] = useState([]);

	useEffect(() => {
		const fetchProprietaire = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/proprietaires`);

			setProprietaireData(res.data['hydra:member']);
		};
		fetchProprietaire();
	}, []);

	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<>
			<Container className='c1'>
				{' '}
				<h1>Liste des proprietaires</h1>
				<div className='center'>
					<Link to='/addproprietaire'>
						<Button variant='warning' className='btn btn-sm'>
							Ajouter proprietaire
						</Button>
					</Link>
				</div>
				{proprietaireData &&
					proprietaireData.map((item, key) => {
						return <Card3 proprietaireData={item} key={key} />;
					})}
				<Container>
					<div className='center'>
						<Pagination>
							<Pagination.First />
							<Pagination.Prev />
							<Pagination.Item>{1}</Pagination.Item>

							<Pagination.Next />
							<Pagination.Last />
						</Pagination>
					</div>
				</Container>
				<div className='scroll-to-top m-5'>
					{isVisible && (
						<div onClick={scrollToTop} className='btn-top'>
							<img className='img' src='/arrow.png' alt='arrow'></img>
						</div>
					)}
				</div>
			</Container>
		</>
	);
};

export default Homeproprietaire;
