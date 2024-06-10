//enums
import { ButtonThemeEnum } from '../../enums/button-theme.enum';
import { ButtonTypeEnum } from '../../enums/button-type.enum';

export interface ButtonProps {
  text: string;
  type?: ButtonTypeEnum;
  theme: ButtonThemeEnum;
  fontSize?: string;
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
}
