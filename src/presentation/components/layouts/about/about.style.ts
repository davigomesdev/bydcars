//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.purpleTheme.purple50};
    
    &:hover .card {
        transform: rotate(10deg);
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 50px 20px;
    display: grid;
    align-items: center;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr); 
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 15px;
    color: ${theme.colors.neutralTheme.neutral00};
    h1{
        font-size: 60px;
        letter-spacing: 4px;
        text-align: right;
        font-family: ${theme.font.family.adumu};
    }

    p{
        font-family: ${theme.font.family.poppins};
        color: ${theme.colors.neutralTheme.neutral00};
        max-width: 450px;
    }
`;

export const Figures = styled.div`
    width: 100%;
    position: relative;
`;

export const Car = styled.span`
    width: 100%;
    bottom: 0;
    left: 30px;
    position: absolute;
    z-index: 2;

    img{
        width: 100%;
    }
`;

export const Card = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;

    img{
        width: 100%;
    }
`;
