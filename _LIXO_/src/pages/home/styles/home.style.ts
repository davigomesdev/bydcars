//styled
import styled from 'styled-components';

//themes
import { theme } from '../../../shared/themes/theme';

export const HomeBackgroundContainer = styled.div<{ image: string }>`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HomeStartContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    gap: 25px;

    img{
        width: 100%;
        max-width: 700px;
    }

    h1{
        font-size: 60px;
        letter-spacing: 4px; 
        font-family: ${theme.font.family.adumu};
        color: ${theme.colors.greenLemonTheme.greenLemon50};
    }
`;

export const HomeAboutContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 50px 20px;
    background-color: ${theme.colors.purpleTheme.purple50};
    display: grid;
    align-items: center;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
`;

export const HomeAboutInfoContainer = styled.div`
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

export const HomeAboutFiguresContainer = styled.div`
    width: 100%;
    position: relative;
    span{
        width: 100%;
        bottom: 0;
        left: 80px;
        position: absolute;
    }

    span img{
        width: 100%;
    }
`;

export const HomeAboutFiguresBackgroundContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
    }
`;
