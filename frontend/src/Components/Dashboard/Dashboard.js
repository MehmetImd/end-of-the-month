import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1 className='header'>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2 className='total'>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2 className='total'>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2 className='total'>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .total{
        color: rgba(229, 229, 229, 0.934);
    }
    .header{
        font-size: 30px;
        color: rgba(237, 237, 237, 0.974);
    }
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            width: auto;
            height: 320px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
                margin-top: 1rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: rgba(5, 2, 17, 0.934);
                    border: 2px solid orange;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 10px;
                    padding: 1rem;
                    p{
                        font-size: 2rem;
                        font-weight: 700;
                    }
                }

                .income{
                    color: var(--color-green);
                    height: 80%;
                }
                .expense{
                    color: red;
                    height: 80%;
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 80%;
                    p{
                        color: blue;
                        opacity: 0.8;
                        font-size: 2rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 0.5rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: rgba(237, 237, 237, 0.974);
            }
            .salary-title{
                font-size: 1rem;
                span{
                    font-size: 1.6rem;
                }
            }
            .salary-item{
                background: rgba(71, 71, 71, 0.698);
                border: 2px solid orange;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    color: rgba(229, 229, 229, 0.934);
                    font-weight: 600;
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export default Dashboard