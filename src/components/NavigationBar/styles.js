import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
`;

export const NavigationLink = styled(NavLink)`
    position: relative;

    text-decoration: none;
    color: black;
    padding: 20px 5px;

    transition: color 300ms ease;

    &:hover,
    &:focus,
    &.active {
        color: #097957;
    }

    &.active::after {
        position: absolute;
        bottom: 10px;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background-color: #097957;
    }
`;
