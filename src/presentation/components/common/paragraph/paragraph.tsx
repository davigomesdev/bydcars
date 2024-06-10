//style imports
import * as Style from './paragraph.style';

//props imports
import { ParagraphProps } from './paragraph.props';

const Paragraph = ({ text, color, fontSize, textAlign, limit }: ParagraphProps) => {
	return (
		<Style.Container color={color} fontSize={fontSize} textAlign={textAlign} limit={limit}>
			{text}
		</Style.Container>
	);
};

export default Paragraph;
