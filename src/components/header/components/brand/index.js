import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const StyledBrand = styled.div`
    width: 100%;
    margin-left: -38px; /* width of menu */
    
    @media only screen and (min-width: 768px) {
        margin-left: -44px;
    }
`

const H1 = styled.h1`
    color: #FFEAD0;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    font-size: 38px;
    text-align: center;
    opacity: 1;
    transition: opacity 0.2s cubic-bezier(0.77,0.2,0.05,1.0);

    & span {
        font-weight: 600;
        letter-spacing: 1.4px;
        color: #fff;
    }

    @media only screen and (min-width: 768px) {
        & span {
            text-shadow: 0 0 1px rgba(0, 0, 0, 0);
            transition: text-shadow 1s ease-in-out;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1199px) {
        font-size: 44px;
        
        & span {
            letter-spacing: 1.7;
        }
    }

    @media only screen and (min-width: 1200px) {
        font-size: 56px;

        & span {
            letter-spacing: 2px;
        }
    }

    ${props => props.open && css`
    
        @media only screen and (max-width: 767px) {
            opacity: 0;    
        }
        
        @media only screen and (min-width: 768px) {
            & span {
                text-shadow: 0 0 9px rgba(255, 255, 255, 0.4);
            }
        }`
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