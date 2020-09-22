import React, {Component} from 'react';
import styled, {css} from 'styled-components';


/* 
   ToggleSwitch
   Set id using prop "Id"
*/

const Input = styled.input`
    display: none;

    &:checked ~ label {
        
    }

    &:checked ~ label::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`

const Label = styled.label`
    display: block;
    height: 28px;
    width: 56px;
    border-radius: 28px;
    cursor: pointer;
    background: #FFEAD0;
    text-indent: -80px;
    font-size: 1rem;
    line-height: 1.875;
    font-weight: 600;
    text-transform: uppercase;
    color: #FFEAD0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: white;
        transition: left 0.2s cubic-bezier(0.77,0.2,0.05,1.0), transform 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    }

`

export default class ToggleSwitch extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className={this.props.className}>
                <Input type="checkbox" id={this.props.Id || 'toggle_switch'} />
                <Label for={this.props.Id || 'toggle_switch'}>{this.props.text || 'Toggle'}</Label>
            </div>
        );
    }
}