import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const TitleContainer = styled.h1<{
  color?: string;
  fontSize?: string;
  textAlign?: string;
  maxWidth?: string;
  limit?: number;
}>`
  width: 100%;
  font-family: 'Poppins';
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')};
  font-weight: ${theme.font.weight.semibold};
  ${(props) =>
    props.limit &&
    `display: -webkit-box;
    -webkit-line-clamp: ${props.limit};
    -webkit-box-orient: vertical;
    overflow: hidden;`};
  ${(props) =>
    props.color ? `color: ${props.color};` : `color: ${theme.colors.neutralTheme.neutral00};`};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : 'font-size: 20px;')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;
