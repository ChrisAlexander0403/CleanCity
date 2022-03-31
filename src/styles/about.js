import styled from 'styled-components';

export const AboutContainer = styled.div`

`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    align-items: center;
    justify-content: center;
    background: #b6b6b6;
    
    & ul {
        list-style: none;
        & > li {
            margin: 0 20px;
            display: inline;
            font-weight: bold;

            & > a {
                color: #2E8049;

                &.active {
                    color: #fff;
                }
            }
        }
    }
`;

export const Body = styled.div`
    
`;