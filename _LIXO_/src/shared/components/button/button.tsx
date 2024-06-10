//styles
import { ButtonDefault, ButtonTheme, ButtonOutline } from './button.style';

//props
import { ButtonProps } from './button.props';

const Button = ({ text, type, theme, fontSize, size, disabled, onClick }: ButtonProps) => {
  if (theme === 'default') {
    return (
      <ButtonDefault
        type={type}
        fontSize={fontSize}
        size={size}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? 'Wait...' : text}
      </ButtonDefault>
    );
  }

  if (theme === 'theme') {
    return (
      <ButtonTheme
        type={type}
        fontSize={fontSize}
        size={size}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? 'WAIT...' : text}
      </ButtonTheme>
    );
  }

  if (theme === 'outline') {
    return (
      <ButtonOutline
        type={type}
        fontSize={fontSize}
        size={size}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? 'WAIT...' : text}
      </ButtonOutline>
    );
  }
};

export default Button;
