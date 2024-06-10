//styled
import styled from 'styled-components';

export const Container = styled.div<{
	color?: string;
	isFlex?: boolean;
	align?: string;
	justify?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ color }) => color && `background-color: ${color};`};
  ${({ align }) => (align ? `align-items: ${align};` : 'align-items: center;')};
  ${({ justify }) => (justify ? `justify-content: ${justify};` : 'justify-content: start;')};
  ${({ isFlex }) => isFlex && 'flex: 1;'};
`;
