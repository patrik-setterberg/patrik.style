import React from 'react';
import styled, {css} from 'styled-components';
import MenuListItem from '../menu_list_item';
import g from '../../../../globals.js';

const StyledMenuList = styled.ul`
    list-style-type: none;
    position: absolute;
    width: 300px;
    top: 5rem;
    padding-right: 2rem;
    transform-origin: 0% 0%;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.25s var(--default-timing), opacity 0.25s var(--default-timing);
    ${props => props.open && css`
        transform: translateX(0%);
        opacity: 1;`
    }

    @media ${g.medium} {
        top: 7rem;
        background-color: red;
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
            {links.map((link, i) => <MenuListItem open={props.open} page={link} key={i} />)}
        </StyledMenuList>
    );
}

export default MenuList;