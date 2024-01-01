import React, { useState } from 'react'
import styled from 'styled-components'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <div className="text">
                    <h2>End of the Month</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 1rem 1rem;
    width: 375px;
    height: 100%;
    background: rgba(69, 69, 69, 0.783);
    border: 2px solid orange;
    backdrop-filter: blur(8.5px);
    border-radius: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        h2{
            color: rgb(242, 242, 242);
        }
        p{
            color: rgba(226, 226, 226, 0.809);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(195, 195, 195, 0.724);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(195, 195, 195, 0.724);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(237, 237, 237, 0.974) !important;
        i{
            color: rgba(237, 237, 237, 0.974) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: rgba(237, 237, 237, 0.974);
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation