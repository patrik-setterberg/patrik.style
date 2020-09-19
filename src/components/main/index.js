import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../container';

const StyledMain = styled.main`
    flex: 1 1 auto;
`

const StyledContainer = styled(Container)`
    height: 1337px;
`

export default class Main extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    
    render() {
        return(
            <StyledMain>
                <StyledContainer>
                    hurra
                </StyledContainer>
            </StyledMain>
        );
    }
}