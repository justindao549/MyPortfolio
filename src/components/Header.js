import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar className="bg-white" sticky="top" expand="md">
			<NavbarBrand className="ms-5" href="/">
				<h1 className="mt-1 text-[#fb5a6e]">DAO</h1>
			</NavbarBrand>

			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse isOpen={menuOpen} navbar>
				<Nav className="ms-auto " navbar>
					<NavItem>
						<NavLink className="nav-link" to="/">
							<i className="fa fa-home fa-lg " /> Home
						</NavLink>git add .
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/directory">
							<i className="fa fa-list fa-lg" /> Directory
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/about">
							<i className="fa fa-info fa-lg" /> About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/contact">
							<i className="fa fa-address-card fa-lg" /> Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
