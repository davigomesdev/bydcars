import { ParagraphContainer } from './paragraph.style';
import { ParagraphProps } from './paragraph.props';

const Paragraph = ({ text, color, fontSize, textAlign, limit }: ParagraphProps) => {
  return (
    <ParagraphContainer color={color} fontSize={fontSize} textAlign={textAlign} limit={limit}>
      {text}
    </ParagraphContainer>
  );
};

export default Paragraph;
