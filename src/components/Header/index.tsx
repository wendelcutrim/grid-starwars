import './styles.css';

import logo from '/logo-yellow.svg';

import { Navbar, Container } from 'react-bootstrap';
import { BsJustify } from 'react-icons/bs';

export default function Header() {
	
	return (
		<Navbar bg="black" variant="dark">
			<Container className="flex-row">
				<Navbar.Brand href='/' className="d-flex align-items-center" >
					<img
						alt="Logo image"
						src={logo}
						width="72"
						height="72"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>

				<Navbar.Text>
					<BsJustify className="title-nav"/>
				</Navbar.Text>
			</Container>
		</Navbar>
	);
}