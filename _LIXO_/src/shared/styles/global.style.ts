//styled
import { createGlobalStyle } from 'styled-components';

//themes
import { theme } from '../themes/theme';

const globalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    body{
        display: flex;
        flex-direction: column;
        background: ${theme.colors.purpleTheme.purple100}; 
    }

    a{
        text-decoration: none;
    }
`;

export default globalStyle;
