//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

interface ContainerProps {
	fontSize?: string;
	size?: string;
}

export const Default = styled.button<ContainerProps>`
  color: ${theme.colors.neutralTheme.neutral00};
  background-color: ${theme.colors.purpleTheme.purple50};
  border: none;
  width: 100%;
  ${({ size }) => size && `max-width: ${size}`};
  padding: 10px 15px;
  border-radius: 10px;
  font-size: ${({ fontSize }) => fontSize || theme.font.size.md};
  transition: 0.3s ease;
  font-family: 'Poppins';

  cursor: pointer;
  &:hover {
    background: ${theme.colors.purpleTheme.purple50};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Theme = styled.button<ContainerProps>`
  color: ${theme.colors.neutralTheme.neutral00};
  background-color: ${theme.colors.purpleTheme.purple50};
  border: none;
  width: 100%;
  ${({ size }) => size && `max-width: ${size}`};
  padding: 6px 15px;
  padding-top: 11px;
  border-radius: 30px;
  font-size: ${({ fontSize }) => fontSize || theme.font.size.lg};
  font-family: ${theme.font.family.adumu};
  transition: 0.3s ease;
  letter-spacing: 2px; 

  cursor: pointer;
  &:hover {
    background: ${theme.colors.purpleTheme.purple50};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Outline = styled.button<ContainerProps>`
  color: ${theme.colors.neutralTheme.neutral00};
  background: none;
  border: 3px solid ${theme.colors.purpleTheme.purple50};
  width: 100%;
  ${({ size }) => size && `max-width: ${size}`};
  padding: 7px 15px;
  border-radius: 30px;
  font-size: ${({ fontSize }) => fontSize || theme.font.size.md};

  transition: 0.3s ease;

  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.purpleTheme.purple50};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
