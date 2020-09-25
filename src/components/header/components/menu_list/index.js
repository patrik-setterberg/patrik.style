import React from 'react';
import styled, {css} from 'styled-components';
import MenuListItem from '../menu_list_item';

const StyledMenuList = styled.ul`
    list-style-type: none;
    position: absolute;
    width: 300px;
    top: 5rem;
    padding-right: 2rem;
    transform-origin: 0% 0%;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.3s cubic-bezier(0.77,0.2,0.05,1.0);
    ${props => props.open && css`
        transform: translateX(0%);
        opacity: 1;`
    }

    @media only screen and (min-width: 768px) {
        top: 7rem;
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