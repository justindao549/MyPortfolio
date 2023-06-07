import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header2 = () => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 1200);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<div style={isDesktop ? navbarStyleDesktop : navbarStyleMobile}>
			<Navbar color="transparent" light expand="md">
				<Nav vertical={isDesktop}>
					<NavItem className="fade-in">
						<NavLink
							to="/"
							className={
								isDesktop ? 'nav-links font-light' : 'nav-linksMob font-light'
							}
							activeClassName="active">
							Home
						</NavLink>
					</NavItem>
					<NavItem className="fade-in2">
						<NavLink
							to="/Portfolio"
							className={
								isDesktop ? 'nav-links font-light' : 'nav-linksMob font-light'
							}
							activeClassName="active">
							Portfolio
						</NavLink>
					</NavItem>
					<NavItem className="fade-in3">
						<NavLink
							to="/About"
							className={
								isDesktop ? 'nav-links font-light' : 'nav-linksMob font-light'
							}
							activeClassName="active">
							About
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};

const navbarStyleDesktop = {
	position: 'fixed',
	height: '100vh',
	width: '100px',
	backgroundColor: 'transparent',
	right: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	marginTop: '-200px',
	zIndex: 1000,
};

const navbarStyleMobile = {
	position: 'fixed',
	width: '100%',
	backgroundColor: 'transparent',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	zIndex: 1000,
};

export default Header2;
