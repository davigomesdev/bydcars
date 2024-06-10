//style imports
import * as Style from './navbar.style';

//react imports
import { useState } from 'react';

//enum imports
import { ButtonThemeEnum } from '../../../../domain/enums/button-theme.enum';

//icon imports
import { IoMdMenu } from 'react-icons/io';

//image imports
import LogoImage from '../../../assets/images/logo.png';

//component imports
import NavMenu from '../nav-menu/nav-menu';
import Button from '../../common/button/button';

const Navbar = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleToggleMenu = (isActive: boolean): void => {
		setIsActive(isActive);
	};

	const handleOnClickPlayNow = (): void => {
		window.open('https://play.bydcars.io/garage/cars-nft', '_blank', 'noopener,noreferrer');
	};

	return (
		<Style.Container>
			<Style.Logo>
				<img src={LogoImage} alt='BYD' />
			</Style.Logo>
			<Style.Menus isActive={isActive}>
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
						onClick={() => handleToggleMenu(false)}
					/>
				</li>
			</Style.Menus>
			<Style.PlayNowButton>
				<Button text='PLAY NOW' theme={ButtonThemeEnum.THEME} onClick={handleOnClickPlayNow} />
			</Style.PlayNowButton>
			<Style.ButtonMenus onClick={() => handleToggleMenu(true)}>
				<IoMdMenu />
			</Style.ButtonMenus>
		</Style.Container>
	);
};

export default Navbar;
