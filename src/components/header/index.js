import React, {Component} from 'react';
import styled, {css} from 'styled-components';


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: auto;
    height: 400px;
    background: linear-gradient(to bottom, #283a42, #37505C, #283a42);
    flex: 0 0 auto;
    border-bottom: 2px solid #333;
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.4);
    min-height: 100px;
    max-height: 700px;
    position: sticky;
    top: 0;

    ${props => props.open && css`
        z-index: 3;
        height: 700px !important;
        transition: height 0.2s cubic-bezier(0.77,0.2,0.05,1.0);`    
    }
`

export default class Header extends Component {
    
    render() {
        return (
            <StyledHeader>
                nu är det mat
            </StyledHeader>
        );   
    }
}