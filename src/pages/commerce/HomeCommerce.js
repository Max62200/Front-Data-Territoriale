import { useState, useEffect } from 'react';
import Card from '../../components/Commerce/Card';
import axios from 'axios';
import './HomeCommerce.css';
import Pagination from 'react-bootstrap/Pagination';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	const [commerceData, setCommerceData] = useState([]);

	useEffect(() => {
		const fetchCommerce = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/commerces`);

			setCommerceData(res.data['hydra:member']);
		};
		fetchCommerce();
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
				<h1>Liste des commerces</h1>
				<div className='right'>
					<Link to='/addcommerce'>
						<Button variant='warning' className='btn btn-sm'>
							Ajouter Commerce
						</Button>
					</Link>
				</div>
				{commerceData &&
					commerceData.map((item, key) => {
						return <Card commerceData={item} key={key} />;
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

export default Home;
