//style imports
import * as Style from './title.style';

//props imports
import { TitleProps } from './title.props';

const Title = ({ text, color, fontSize, textAlign, maxWidth, limit }: TitleProps) => {
	return (
		<Style.Container
			color={color}
			fontSize={fontSize}
			textAlign={textAlign}
			maxWidth={maxWidth}
			limit={limit}
		>
			{text}
		</Style.Container>
	);
};

export default Title;
