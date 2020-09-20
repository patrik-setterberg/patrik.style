import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const StyledBrand = styled.div`
    width: 100%;
`

const H1 = styled.h1`
    color: #FFEAD0;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    font-size: 56px;
    margin-left: calc(17% - 2.5rem);
    transition: margin-left 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    ${props => props.open && css`
        margin-left: max(250px, calc(17% - 40px));`    
    }

    & span {
        font-weight: 600;
        letter-spacing: 2px;
        color: #fff;
    }
`

export default class Brand extends Component {
    constructor(props) {
        super();
    }
    
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