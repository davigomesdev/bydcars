//styled
import styled from 'styled-components';

//theme
import { theme } from '../../themes/theme';

export const NavMenuContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 20px;
    font-family: ${theme.font.family.adumu};
    color: ${theme.colors.purpleTheme.purple80};
  }
`;
