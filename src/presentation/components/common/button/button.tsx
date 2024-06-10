//styles
import { Default, Theme, Outline } from './button.style';

//props
import { ButtonProps } from './button.props';

const Button = ({ text, type, theme, fontSize, size, disabled, onClick }: ButtonProps) => {
	if (theme === 'default') {
		return (
			<Default type={type} fontSize={fontSize} size={size} onClick={onClick} disabled={disabled}>
				{disabled ? 'Wait...' : text}
			</Default>
		);
	}

	if (theme === 'theme') {
		return (
			<Theme type={type} fontSize={fontSize} size={size} onClick={onClick} disabled={disabled}>
				{disabled ? 'WAIT...' : text}
			</Theme>
		);
	}

	if (theme === 'outline') {
		return (
			<Outline type={type} fontSize={fontSize} size={size} onClick={onClick} disabled={disabled}>
				{disabled ? 'WAIT...' : text}
			</Outline>
		);
	}
};

export default Button;
