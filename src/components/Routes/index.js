import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarTop from '../NavbarTop';
import HomeCommerce from '../../pages/commerce/HomeCommerce';
import Login from '../../pages/user/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/user/Register';
import Showcompte from '../../pages/user/Showcompte';
import Showcommerce from '../../pages/commerce/Showcommerce';
import Addcommerce from '../../pages/commerce/Addcommerce';
import Updatecommerce from '../../pages/commerce/Updatecommerce';
import Home from '../../pages/Home';
import Homegerant from '../../pages/gerant/Homegerant';
import Showgerant from '../../pages/gerant/Showgerant';
import Addgerant from '../../pages/gerant/Addgerant';
import Updategerant from '../../pages/gerant/Updategerant';
import Addproprietaire from '../../pages/proprietaire/Addproprietaire';
import Updateproprietaire from '../../pages/proprietaire/Updateproprietaire';
import Showproprietaire from '../../pages/proprietaire/Showproprietaire';
import Homeproprietaire from '../../pages/proprietaire/Homeproprietaire';




const index = () => {
	return (
		<BrowserRouter>
			<NavbarTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/homegerant' element={<Homegerant />} />
				<Route path='/homecommerce' element={<HomeCommerce />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/register' element={<Register />} />
				<Route path='/showcompte' element={<Showcompte />} />
				<Route path='/showcommerce/:id' element={<Showcommerce />} />
				<Route path='/addcommerce' element={<Addcommerce />} />
				<Route path='/updatecommerce' element={<Updatecommerce />} />
				<Route path='/showgerant/:id' element={<Showgerant />} />
				<Route path='/addgerant' element={<Addgerant />} />
				<Route path='/updategerant/:id' element={<Updategerant />} />
				<Route path='/addproprietaire' element={<Addproprietaire />} />
				<Route path='/updateproprietaire/:id' element={<Updateproprietaire />} />
				<Route path='/showproprietaire/:id' element={<Showproprietaire />} />
				<Route path='/homeproprietaire' element={<Homeproprietaire />} />

			</Routes>
		</BrowserRouter>
	);
};

export default index;
