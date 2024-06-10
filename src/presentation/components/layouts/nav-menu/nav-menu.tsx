//styles
import { Container } from './nav-menu.style';

//props
import { NavMenuProps } from './nav-menu.props';

//react-router imports
import { Link } from 'react-router-dom';

const NavMenu = ({ to, name }: NavMenuProps) => {
	return (
		<Container>
			<Link to={to}>{name}</Link>
		</Container>
	);
};

export default NavMenu;
