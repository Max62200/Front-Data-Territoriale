import { useState, useEffect } from 'react';
import Card from '../components/Commerce/Card';
import axios from 'axios';
import './Home.css';
import Pagination from 'react-bootstrap/Pagination';
import { Container } from 'react-bootstrap';


const Home = () => {
	// const [commerceData, setCommerceData] = useState([]);

	// useEffect(() => {
	// 	const fetchCommerce = async () => {
	// 		const res = await axios.get(`${REACT_APP_API_URL}/commerce`);
	// 		console.log(res.data);
	// 		setCommerceData(res.data);
	// 	};
	// 	fetchCommerce();
	// }, []);

	const data = [
		{
			name: 'CHEZ LUDO',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ SIMON',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ MAXENCE',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ ANTOINE',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ LA TRUFFE',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ SANS CHAISE',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ BOL',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ TONY',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
		{
			name: 'CHEZ LA FOUINE',
			type: 'RESTAURANT',
			phone: '0685858585',
			address: '18 rue des mouettes Boulogne sur mer',
		},
	];

	return (
		<>
			<h1>Liste des commerces</h1>
			{data &&
				data.map((item, key) => {
					return <Card data={item} key={key} />;
				})}
			<Container >
                <div className='center'>
				<Pagination>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item>{1}</Pagination.Item>

					<Pagination.Next />
					<Pagination.Last />
				</Pagination></div>
			</Container>
		</>
	);
};

export default Home;
