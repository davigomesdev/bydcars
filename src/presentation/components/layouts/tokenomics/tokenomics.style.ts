//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-color: ${theme.colors.purpleTheme.purple50};

    h1{
        font-size: 70px;
        letter-spacing: 4px;
        text-align: center;
        font-family: ${theme.font.family.adumu};
        color: ${theme.colors.purpleTheme.purple50};
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    background-color: ${theme.colors.neutralTheme.neutral00};
    border-radius: 30px;
`;

export const Legends = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;

    li {
        display: flex;
        gap: 5px;
        font-family: ${theme.font.family.adumu};
        color: ${theme.colors.purpleTheme.purple80};
    }

    li span {
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
    }

    li span.line-01 {
        background-color: ${theme.colors.graphicTheme.graphicLine01};
    }
    
    li span.line-02 {
        background-color: ${theme.colors.graphicTheme.graphicLine02};
    }

    li span.line-03 {
        background-color: ${theme.colors.graphicTheme.graphicLine03};
    }
    
    li span.line-04 {
        background-color: ${theme.colors.graphicTheme.graphicLine04};
    }

    li span.line-05 {
        background-color: ${theme.colors.graphicTheme.graphicLine05};
    }
    
    li span.line-06 {
        background-color: ${theme.colors.graphicTheme.graphicLine06};
    }
    
    li span.line-07 {
        background-color: ${theme.colors.graphicTheme.graphicLine07};
    }

    li span.line-08 {
        background-color: ${theme.colors.graphicTheme.graphicLine08};
    }
    
    li span.line-09 {
        background-color: ${theme.colors.graphicTheme.graphicLine09};
    }
`;
