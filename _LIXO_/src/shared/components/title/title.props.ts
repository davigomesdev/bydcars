//enums
import { TextAlignEnum } from '../../enums/text-align.enum';

export interface TitleProps {
  text: string;
  color?: string;
  fontSize?: string;
  textAlign?: TextAlignEnum;
  maxWidth?: string;
  limit?: number;
}
