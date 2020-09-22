import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import ToggleSwitch from '../../toggle_switch';

const StyledToggler = styled(ToggleSwitch)`
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    
    & label {
        text-indent: -112px;
    }

    & label::after {
        background: linear-gradient(to bottom, #2e434c, #314852);
    }
`

export default class DarkToggle extends Component {

    render() {
        return(
            <StyledToggler Id="darkToggler" text="Dark mode"/>
        );
    }
}