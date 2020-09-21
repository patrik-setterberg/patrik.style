import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const StyledBrand = styled.div`
    width: 100%;
`

const H1 = styled.h1`
    color: #FFEAD0;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    font-size: 38px;
    margin-left: max(calc(17% - 1.5rem), 60px);
    opacity: 1;
    transition: margin-left 0.2s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    ${props => props.open && css`
        margin-left: max(250px, calc(17% - 24px));    
    
        @media only screen and (max-width: 767px) {
            opacity: 0;    
        }`
    }

    & span {
        font-weight: 600;
        letter-spacing: 1.4px;
        color: #fff;
    }

    @media only screen and (min-width: 768px) {
        font-size: 56px;

        & span {
            letter-spacing: 2px;
        }
    }
`

export default class Brand extends Component {
    
    render() {
        return(
            <StyledBrand>
                <H1 open={this.props.open}>
                    patrik.<span>style</span>
                </H1>
            </StyledBrand>
        );
    }
}