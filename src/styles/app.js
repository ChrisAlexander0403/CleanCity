import styled from 'styled-components';

export const Footer = styled.footer`
    height: 300px;
    background: ${props => props.isDark ? "#174025" : "#2E8049"};
    padding: 20px 30px;
    color: #fff;
    display: flex;

    & > div{
        width: 50vw;
        & > .info {
            font-weight: bold;
            
            & > .class {
            font-size: 28px;
            }
            & > .school {
                font-size: 22px;
            }
        }

        & .participants {
            ul {
                padding-left: 20px;
                list-style: none;
            }
        }
    }

    & p {
        margin-bottom: 10px;
    }

    & > .img-container {
        padding-left: 50px;
        height: 250px;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;