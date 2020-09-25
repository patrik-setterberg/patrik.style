import React from 'react';
import styled from 'styled-components';

const StyledMenuListItem = styled.li`
     a {
        color: #FFEAD0;
        font-size: 1.8rem;
        position: relative;
        line-height: 3;
        font-weight: 300;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 1.4px;
        transition: letter-spacing 0.2s cubic-bezier(0.77,0.2,0.05,1.0), color 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    }
    
    & a::after,
    & a:visited::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 2px;
        width: 0;
        background: #FFEAD0;
        border-radius: 2px;
        transition: width 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    & a:hover,
    & a:focus {
        outline: none;
        letter-spacing: 1.8px;
        color: #FFF;
        transition: letter-spacing 0.2s cubic-bezier(0.77,0.2,0.05,1.0), color 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    & a:hover::after,
    & a:focus::after {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        & a {
            font-size: 1.6rem;
            line-height: 2.5;
        }
    }
`

function MenuListItem(props) {
    return(
        <StyledMenuListItem>
            <a href={props.page.url}>{props.page.title}</a>
        </StyledMenuListItem>
    );
}

export default MenuListItem;