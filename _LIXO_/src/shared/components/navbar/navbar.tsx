//styles
import { Container } from '../../styles/container.style';
import {
	NavbarContainer,
	NavbarLogoImageContainer,
	NavbarNavMenusList,
	NavbarButtonMenus,
	NavbarPlayNowButtonContainer,
} from './navbar.style';

//react
import { useState } from 'react';

//react-router
//import { useNavigate } from 'react-router-dom';

//enums
import { ButtonThemeEnum } from '../../enums/button-theme.enum';
//import { PageUrlEnum } from '../../enums/page-url.enum';

//icons
import { IoMdMenu } from 'react-icons/io';

//images
import LogoImage from '../../../assets/images/logo.png';

//components
import NavMenu from '../nav-menu/nav-menu';
import Button from '../button/button';

const Navbar = () => {
	//const navigate = useNavigate();

	const [isActive, setIsActive] = useState<boolean>(false);

	const handleOnCLickSetIsActive = (isActive: boolean): void => {
		setIsActive(isActive);
	};

	/*const handleOnCLickGoHome = (): void => {
		navigate(PageUrlEnum.HOME);
	};*/

	return (
		<Container>
			<NavbarContainer>
				<NavbarLogoImageContainer>
					<img src={LogoImage} alt='BYD' />
				</NavbarLogoImageContainer>
				<NavbarNavMenusList isActive={isActive}>
					<NavMenu to='' name='ABOUT' />
					<NavMenu to='' name='NFTS' />
					<NavMenu to='' name='ELETRIC STATION' />
					<NavMenu to='' name='TOKENOMICS' />
					<NavMenu to='' name='ROADMAP' />
					<NavMenu to='' name='WHITE PAPER' />
					<li className='close-button'>
						<Button
							text='CLOSE MENU'
							theme={ButtonThemeEnum.OUTLINE}
							onClick={() => handleOnCLickSetIsActive(false)}
						/>
					</li>
				</NavbarNavMenusList>
				<NavbarPlayNowButtonContainer>
					<Button text='PLAY NOW' theme={ButtonThemeEnum.THEME} />
				</NavbarPlayNowButtonContainer>
				<NavbarButtonMenus onClick={() => handleOnCLickSetIsActive(true)}>
					<IoMdMenu />
				</NavbarButtonMenus>
			</NavbarContainer>
		</Container>
	);
};

export default Navbar;
