import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../container';

const StyledFooter = styled.footer`
    width: auto;
    background-color: #444;
    flex-shrink: 0;
`

const FooterContainer = styled.div`
    width: 66%;
    margin: 0 auto;
    padding: 20px;
    color: #FFEAD0;
`

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <StyledFooter>
                <FooterContainer>yo</FooterContainer>
            </StyledFooter>
        );
    }
}