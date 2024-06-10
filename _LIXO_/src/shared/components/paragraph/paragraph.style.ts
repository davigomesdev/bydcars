import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const ParagraphContainer = styled.p<{
  color?: string;
  fontSize?: string;
  textAlign?: string;
  limit?: number;
}>`
  ${(props) =>
    props.limit &&
    `display: -webkit-box;
    -webkit-line-clamp: ${props.limit};
    -webkit-box-orient: vertical;
    overflow: hidden;`}

  width: 100%;
  font-family: ${theme.font.weight.regular};
  ${(props) =>
    props.color ? `color: ${props.color};` : `color: ${theme.colors.neutralTheme.neutral100};`}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : 'font-size: 15px;')}
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')}
`;
