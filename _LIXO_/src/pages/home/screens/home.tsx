//styles
import {
	HomeBackgroundContainer,
	HomeContainer,
	HomeStartContainer,
	HomeAboutContainer,
	HomeAboutInfoContainer,
	HomeAboutFiguresContainer,
	HomeAboutFiguresBackgroundContainer,
} from '../styles/home.style';
import { Container } from '../../../shared/styles/container.style';

//themes
import { theme } from '../../../shared/themes/theme';

//enums
import { TextAlignEnum } from '../../../shared/enums/text-align.enum';

//images
import HomeBackground from '../../../assets/images/home-background.png';
import FullLogoImage from '../../../assets/images/full-logo.png';
import CardImage from '../../../assets/images/card.png';
import MiniDolphinImage from '../../../assets/images/mini-dolphin.png';

//components
import Paragraph from '../../../shared/components/paragraph/paragraph';

const Home = () => {
	return (
		<>
			<HomeBackgroundContainer image={HomeBackground} />
			<HomeContainer>
				<HomeStartContainer>
					<img src={FullLogoImage} alt='Build your dreams' />
					<h1>PLAY TO EARN</h1>
				</HomeStartContainer>
				<Container color={theme.colors.purpleTheme.purple50}>
					<HomeAboutContainer>
						<HomeAboutInfoContainer>
							<h1>ABOUT THE GAME</h1>
							<Paragraph
								text={`BYD is the best-selling automaker in China 
							and the fastest-growing electric car company in the 
							world. Inspired by the BYD phenomenon that graces 
							the streets of the world's largest countries, 
							we've created a PVE/PVP game as a tribute. Our team, 
							being fans of BYD, decided to build the best PVE/PVP 
							car game of 2024 that you will play. Our economy 
							enables the BYD game to remain in the gaming market 
							for years within this crypto universe. Our primary 
							focus will be to get listed on Binance, as the 
							exchange itself is in need of quality games to bolster 
							its platform, which is still quite underdeveloped 
							in the PVE/PVP gaming niche. Welcome to the finest 
							PVE/PVP car game you will encounter this decade.`}
								textAlign={TextAlignEnum.RIGHT}
								fontSize='17px'
							/>
						</HomeAboutInfoContainer>
						<HomeAboutFiguresContainer>
							<span>
								<img src={MiniDolphinImage} alt='mini-dolphin' />
							</span>
							<HomeAboutFiguresBackgroundContainer>
								<img src={CardImage} alt='card' />
							</HomeAboutFiguresBackgroundContainer>
						</HomeAboutFiguresContainer>
					</HomeAboutContainer>
				</Container>
			</HomeContainer>
		</>
	);
};

export default Home;
