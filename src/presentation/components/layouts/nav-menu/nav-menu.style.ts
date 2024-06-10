//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: ${theme.font.size.md};
    font-family: ${theme.font.family.adumu};
    color: ${theme.colors.purpleTheme.purple80};
  }
`;
