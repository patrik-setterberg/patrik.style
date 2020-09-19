import React from 'react';
import styled, { css } from 'styled-components';
import MenuListItem from '../menu_list_item';

const StyledMenuList = styled.ul`
    list-style-type: none;
    position: absolute;
    width: 300px;
    top: 10rem;
    padding-right: 2rem;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    ${props => props.open && css`
        transform: translate(0%, 0%);
        opacity: 1;`
    }
`

function MenuList(props) {
    
    const links = [
        {
            url: '#',
            title: 'Home'
        },
        {
            url: '#',
            title: 'Components'
        },
        {
            url: '#',
            title: 'Icons'
        },
        {
            url: '#',
            title: 'Contact'
        }
    ];

    return(
        <StyledMenuList {...props}>
            {links.map((link, i) => <MenuListItem page={link} key={i} />)}
        </StyledMenuList>
    );
}

export default MenuList;