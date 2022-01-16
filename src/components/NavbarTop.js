import { Navbar, Nav, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import './NavbarTop.css';

const NavbarTop = () => {
	return (
		<Navbar
			className='Navbar'
			fixed='top'
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'
			expand={false}>
			<Container fluid>
				<Navbar.Brand className='brand' href='/'>
					Data Territoriale
				</Navbar.Brand>
				<Navbar.Toggle className='brand2' aria-controls='offcanvasNavbar' />
				<Navbar.Offcanvas
					id='offcanvasNavbar'
					aria-labelledby='offcanvasNavbarLabel'
					placement='end'>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id='offcanvasNavbarLabel'>
							Data Territoriale
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<Nav.Link className='link' href='/'>
								Home
							</Nav.Link>
							<Nav.Link className='link' href='/login'>
								Se connecter
							</Nav.Link>
							<Nav.Link className='link' href='/showcompte'>
								Compte
							</Nav.Link>
						</Nav>
						<Form className='d-flex'>
							<FormControl
								type='search'
								placeholder=''
								className='me-2'
								aria-label='Search'
							/>
								<Button variant='outline-secondary' className='btn btn-sm btn-block'>Rechercher</Button>
						</Form>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
