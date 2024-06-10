//style imports
import * as Style from '../styles/home.style';

//hook imports
import useHome from '../hooks/use-home';

//image imports
import HomeBackground from '../../../assets/images/home-background.png';
import FullLogoImage from '../../../assets/images/full-logo.png';

//component imports
import About from '../../../components/layouts/about/about';
import Nfts from '../../../components/layouts/nfts/nfts';
import Tokenomics from '../../../components/layouts/tokenomics/tokenomics';

const Home = () => {
	const { imgStyle, handleOnClickPlayToEarn } = useHome();

	return (
		<Style.Container>
			<Style.Background image={HomeBackground} />
			<Style.Start>
				<img src={FullLogoImage} alt='Build your dreams' style={imgStyle} />
				<h1 onClick={handleOnClickPlayToEarn}>PLAY TO EARN</h1>
			</Style.Start>
			<About />
			<Tokenomics />
		</Style.Container>
	);
};

export default Home;
