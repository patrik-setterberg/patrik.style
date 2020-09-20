import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Menu from './components/menu';
import Brand from './components/brand';
import {globalVars} from '../../globals.js'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100vw;
    background: linear-gradient(to bottom, #283a42, #37505C, #283a42);
    flex: 0 0 auto;
    border-bottom: 2px solid #333;
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    /* transition: height 0.2s cubic-bezier(0.77,0.2,0.05,1.0); */

    ${props => props.open && css`
        z-index: 3;
        height: var(--header-open-height) !important;
        transition: height 0.2s cubic-bezier(0.77,0.2,0.05,1.0);`
    }
`

export default class Header extends Component {
    
    defaultHeight = globalVars.defaultHeaderHeight;
    minHeight = globalVars.minHeaderHeight;

    constructor() {
        super();
        this.state = {
            open: false,
            height: this.defaultHeight
        }
    }

    toggleOpen() {
        this.setState({
            open: this.state.open === false ? true : false
        });
    }

    setHeight() {
        if ((this.defaultHeight - window.scrollY) > this.minHeight) {
            this.setState({
                height: this.defaultHeight - window.scrollY
            });
        } else if (window.scrollY > (this.defaultHeight - this.minHeight) && this.state.height !== this.minHeight) {
            this.setState({
                height: this.minHeight
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.setHeight.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.setHeight.bind(this));
    }

    render() {
        return (
            <StyledHeader
                open={this.state.open}
                style={{height: `${this.state.height}px`}}
                id="myHeader"
            >
                <Menu
                    toggleOpen={this.toggleOpen.bind(this)} 
                    open={this.state.open}
                />
                <Brand open={this.state.open} />
            </StyledHeader>
        );   
    }
}