import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import g from '../../../../globals.js';

const StyledBrand = styled.div`
    width: 100%;
    margin-left: -38px; /* width of menu */
    
    @media ${g.atleastMedium} {
        margin-left: -44px;
    }
`

const H1 = styled.h1`
    color: var(--color-cream);
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    font-size: 38px;
    text-align: center;
    opacity: 1;
    transition: opacity 0.2s var(--default-timing), font-size 0.2s var(--default-timing);

    & span {
        font-weight: 600;
        letter-spacing: 1.4px;
        color: var(--color-white);
    }

    @media ${g.atleastMedium} {
        & span {
            text-shadow: 0 0 1px rgba(0, 0, 0, 0);
            transition: text-shadow 1s ease-in-out;
        }
    }

    @media ${g.medium} {
        font-size: 44px;
        
        & span {
            letter-spacing: 1.7;
        }
    }

    @media ${g.large} {
        font-size: 56px;

        & span {
            letter-spacing: 2px;
        }
    }

    ${props => props.open && css`
    
        @media ${g.small} {
            opacity: 0;    
        }
        
        @media ${g.atleastMedium} {
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