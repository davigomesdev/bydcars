//styles
import { NavMenuContainer } from './nav-menu.style';

//props
import { NavMenuProps } from './nav-menu.props';

//react-router
import { NavLink } from 'react-router-dom';

const NavMenu = ({ to, name }: NavMenuProps) => {
	return (
		<NavMenuContainer>
			<NavLink to={to}>{name}</NavLink>
		</NavMenuContainer>
	);
};

export default NavMenu;
