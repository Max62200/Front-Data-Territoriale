import { useState, useEffect } from 'react';
import axios from 'axios';
import './Homegerant.css';
import Card2 from '../../components/Gerant/Card2';
import Pagination from 'react-bootstrap/Pagination';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homegerant = () => {
	const [gerantData, setGerantData] = useState([]);

	useEffect(() => {
		const fetchGerant = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/gerants`);

			setGerantData(res.data['hydra:member']);
		};
		fetchGerant();
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
			<Container className='c2'>
				{' '}
				<h1>Liste des gérants</h1>
				<div className='center'>
					<Link to='/addgerant'>
						<Button variant='warning' className='btn btn-sm'>
							Ajouter Gerant
						</Button>
					</Link>
				</div>
				{gerantData &&
					gerantData.map((item, key) => {
						return <Card2 gerantData={item} key={key} />;
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
				<div className='df'>
				<div>
					{isVisible && (
						<div onClick={scrollToTop} className=''>
							<img className='arrow' src='/arrow.png' alt='arrow'></img>
						</div>
					)}
				</div>
				<div>
					<Link to='/'>
						<img className='next' src='/next.png' alt='next'></img>
					</Link>
				</div>
			</div>
			</Container>
		</>
	);
};

export default Homegerant;
