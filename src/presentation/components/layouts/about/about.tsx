//style imports
import * as Style from './about.style';

//enum imports
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';

//image imports
import CardImage from '../../../assets/images/card.png';
import MiniDolphinImage from '../../../assets/images/mini-dolphin.png';

//component imports
import Paragraph from '../../common/paragraph/paragraph';

const About = () => {
	return (
		<Style.Container>
			<Style.Content>
				<Style.Info>
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
				</Style.Info>
				<Style.Figures>
					<Style.Car>
						<img src={MiniDolphinImage} alt='mini-dolphin' />
					</Style.Car>
					<Style.Card className='card'>
						<img src={CardImage} alt='card' />
					</Style.Card>
				</Style.Figures>
			</Style.Content>
		</Style.Container>
	);
};

export default About;
