//react imports
import { useState, useEffect } from 'react';

const useHome = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const imgStyle = {
		transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.05}px, ${
			(mousePosition.y - window.innerHeight / 2) * 0.05
		}px)`,
	};

	const handleOnClickPlayToEarn = (): void => {
		window.open('https://play.bydcars.io/garage/cars-nft', '_blank', 'noopener,noreferrer');
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return { imgStyle, handleOnClickPlayToEarn };
};

export default useHome;
