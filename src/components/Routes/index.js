import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarTop from '../NavbarTop';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';
import Show from '../../pages/Show';


const index = () => {
    return (
        <BrowserRouter>
            <NavbarTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/register" element={<Register />} />
                <Route path="/show" element={<Show />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;