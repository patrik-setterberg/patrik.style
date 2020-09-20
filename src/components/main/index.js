import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../container';

const StyledMain = styled.main`
    flex: 1 1 auto;
    margin-top: var(--main-margin-top);
    padding: 0 1rem;
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
                    <p>React is fun.</p>
                </StyledContainer>
            </StyledMain>
        );
    }
}