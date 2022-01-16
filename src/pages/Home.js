import { useState, useEffect } from 'react';
import Card from '../components/Commerce/Card';
import axios from 'axios';
import './Home.css';
import Pagination from 'react-bootstrap/Pagination';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	// const [commerceData, setcommerceData] = useState([]);

	// useEffect(() => {
	// 	const fetchCommerce = async () => {
	// 		const res = await axios.get(`${process.env.REACT_APP_API_URL}/commerces`);
	// 		console.log(res.data);
	// 		setcommerceData(res.data);
	// 	};
	// 	fetchCommerce();
	// }, []);

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


	const data = [
		{
			nom: 'CHEZ LUDO',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ SIMON',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ MAXENCE',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ ANTOINE',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ LA TRUFFE',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ SANS CHAISE',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ BOL',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ TONY',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
		{
			nom: 'CHEZ LA FOUINE',
			typologie: 'RESTAURANT',
			telephone: '0685858585',
			email: '18 rue des mouettes Boulogne sur mer',
		},
	];

	return (
		<>
			<h1>Liste des commerces</h1>
			<div className="right">
				<Link to='/addcommerce'>
					<Button variant='outline-secondary' className='btn btn-sm'>
						Ajouter Commerce
					</Button>
				</Link>
			</div>
			{data &&
				data.map((item, key) => {
					return <Card data={item} key={key} />;
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
		</>
	);
};

export default Home;
