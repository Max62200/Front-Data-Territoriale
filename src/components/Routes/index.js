import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarTop from '../NavbarTop';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';
import Showcompte from '../../pages/Showcompte';
import Showcommerce from '../../pages/Showcommerce';
import Addcommerce from '../../pages/Addcommerce';
import Updatecommerce from '../../pages/Updatecommerce';




const index = () => {
    return (
        <BrowserRouter>
            <NavbarTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/register" element={<Register />} />
                <Route path="/showcompte" element={<Showcompte />} />
                <Route path="/showcommerce" element={<Showcommerce />} />
                <Route path="/addcommerce" element={<Addcommerce />} />
                <Route path="/updatecommerce" element={<Updatecommerce />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;