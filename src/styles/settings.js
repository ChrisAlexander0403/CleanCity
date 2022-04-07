import styled from 'styled-components';

export const SettingsContainer = styled.main`
    display: flex;
    aside {
        .toolbar {
            position: relative;
            z-index: 11;
            width: 250px;
            height: calc(100vh - 60px);
            background: ${props => props.isDark ? '#174025' : "#2E8049"};
            transition: all .3s ease;
            .title {
                color: #fff;
                font-size: 22px;
                font-weight: 600;
                padding: 15px;
            }
            .options {
                display: flex;
                flex-direction: column;
                width: 100%;
                ul {
                    list-style: none;
                }
                li {
                    a, button{
                        display: flex;
                        color: #fff;
                        width: 100%;
                        line-height: 40px;
                        padding-left: 15px;
                        font-size: 16px;
                        &:hover {
                            background-color: #fff;
                            color: #417493;
                        }
                        &.active {
                            color: #417493;
                            background: #fff;
                        }
                    }

                    button {
                        align-items: center;
                        background: none;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    article {
        width: 100%;
        height: 100%;
        padding: 25px 50px;
    }
`;

export const CloseSession = styled.div`
    width: 100%;
    height: 100px;

    & > .info {
        height: 70%;
        padding: 10px;
        color: ${props => props.isDark ? '#fff' : '#000'};
        font-size: 14px;
    }

    & > .buttons {
        height: 30%;
        display: flex;
        justify-content: space-evenly;

        & > button {
            padding: 5px 15px;
            border: none;
            border-radius: 20px;
            background: ${props => props.isDark ? '#174025' : "#2E8049"};
            color: #fff;
            font-weight: bold;
            cursor: pointer;

            &.cancel {
                background: #A93226;
            }
        }
    }
`;