//style imports
import 'swiper/css';
import 'swiper/css/effect-cards';
import * as Style from './nfts.style';

//react imports
import { useState, useRef, useEffect } from 'react';

//swiper imports
import { EffectCards, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

//component imports
import Nft from '../nft/nft';

const Nfts = () => {
	const [direction, setDirection] = useState<number>(1);
	const swiperRef = useRef<SwiperType | null>(null);

	const handleReachEnd = (): void => {
		setDirection(-1);
	};

	const handleReachBeginning = (): void => {
		setDirection(1);
	};

	useEffect(() => {
		if (swiperRef.current) {
			const swiperInstance = swiperRef.current!;
			swiperInstance.autoplay.stop();

			const autoplayOptions = swiperInstance.params.autoplay;
			if (typeof autoplayOptions === 'object') {
				const updatedAutoplayOptions = { ...autoplayOptions };
				updatedAutoplayOptions.reverseDirection = direction === -1;

				swiperInstance.params.autoplay = updatedAutoplayOptions;
			}

			swiperInstance.autoplay.start();
		}
	}, [direction]);

	return (
		<Style.Container>
			<Style.Elements>
				<span />
			</Style.Elements>
			<Style.Content>
				<Style.Deck
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards, Autoplay]}
					loop={false}
					onReachEnd={handleReachEnd}
					onReachBeginning={handleReachBeginning}
					autoplay={{
						delay: 1000,
						pauseOnMouseEnter: true,
					}}
				>
					<Style.Card>
						<Nft />
					</Style.Card>
					<Style.Card>
						<Nft />
					</Style.Card>
					<Style.Card>
						<Nft />
					</Style.Card>
					<Style.Card>
						<Nft />
					</Style.Card>
				</Style.Deck>
			</Style.Content>
		</Style.Container>
	);
};

export default Nfts;
