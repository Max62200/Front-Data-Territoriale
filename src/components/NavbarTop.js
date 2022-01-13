import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarTop = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='/'>DATA TERRITORIALE</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav>
						<Nav.Link href='/login'>Se connecter</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
