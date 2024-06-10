//styles
import { TitleContainer } from './title.style';

//props
import { TitleProps } from './title.props';

const Title = ({ text, color, fontSize, textAlign, maxWidth, limit }: TitleProps) => {
  return (
    <TitleContainer
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      maxWidth={maxWidth}
      limit={limit}
    >
      {text}
    </TitleContainer>
  );
};

export default Title;
