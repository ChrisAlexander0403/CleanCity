import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    
    & > .reports, & > .campaigns {
        & > p {
                font-size: 18px;
                font-weight: 600;
                color: #2E8049;
                margin: 0 20px 20px;
            }
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 430px;
        box-shadow: inset 2px 2px 4px 2px rgba(100,100,100,.2);
        border-radius: 20px;
        padding: 20px;
        overflow-y: auto;
    }

    & > .reports > .reports-list {
        width: 100%;
        & > .report {
            position: relative;
            width: 100%;
            min-height: 100px;
            border-radius: 50px;
            padding: 10px 30px;
            margin-bottom: 18px;
            box-shadow: 2px 2px 4px 2px rgba(100,100,100,.2);

            & > .report-header {
                display: flex;
                justify-content: space-between;

                & > .title {
                    color: #2E8049;
                    font-size: 18px;
                    font-weight: 600;
                }

                & > .date {
                    color: #666;
                }
            }

            & > .report-content {
                & > .status {
                    color: #666;
                }
            }

            & > button {
                position: absolute;
                right: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 105px;
                bottom: 7px;
                padding: 3px 10px;
                border: none;
                background: #2E8049;
                color: #fff;
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
    & > .campaigns > .campaigns-list {
        width: 100%;
        & > .campaign {
            position: relative;
            width: 100%;
            min-height: 100px;
            border-radius: 50px;
            padding: 10px 30px;
            margin-bottom: 18px;
            box-shadow: 2px 2px 4px 2px rgba(100,100,100,.2);

            & > .campaign-header {
                display: flex;
                justify-content: space-between;

                & > .title {
                    color: #2E8049;
                    font-size: 18px;
                    font-weight: 600;
                }

                & > .date {
                    color: #666;
                }
            }

            & > .campaign-content {
                & > .status {
                    color: #666;
                }
            }

            & > button {
                position: absolute;
                right: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 105px;
                bottom: 7px;
                padding: 3px 10px;
                border: none;
                background: #2E8049;
                color: #fff;
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
`;