import styled from 'styled-components';

export const CreditsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 100px;
    background: ${props => props.isDark ? "#181818" : "#eee"};

    & > h2 {
        color: ${props => props.isDark ? "#62A077" : "#2E8049"};
        margin-bottom: 20px;
    }

    & > .info {
        text-align: center;
        font-size: 18px;
        color: ${props => props.isDark ? "#fff" : "#000"};

        & > h4 {
            margin: 10px 0;
        }

        & > ul > li {
            list-style: none;
        }

        & > h6 {
            margin-top: 50px;
        }
    }
`;