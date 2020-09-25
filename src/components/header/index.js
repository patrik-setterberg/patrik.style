import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Menu from './components/menu';
import Brand from './components/brand';
import DarkToggle from './dark_mode_toggler';
import {globalVars} from '../../globals.js'

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background: linear-gradient(to bottom, #283a42, #37505C, #283a42);
    flex: 0 0 auto;
    border-bottom: 2px solid #333;
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;

    @media only screen and (min-width: 768px) {
        transform-style: preserve-3d;

        &::after {
            content: '';
            top: 0;
            position: absolute;
            width: 100vw;
            height: 100vh;
            transform:translateZ(-1px);
            pointer-events: none;
            background: #24333a;
            opacity: 0;
            transition: opacity 0.25s cubic-bezier(0.77,0.2,0.05,1.0);
        }
    }

    ${props => props.open && css`
        height: var(--header-open-height) !important;
        
        @media only screen and (min-width: 768px) {
            &::after {
                opacity: 0.4;
            }  
        }`
    }

    @media only screen and (max-width: 767px) {
        max-height: var(--header-mobile-height);        
    }
`

export default class Header extends Component {
    
    defaultHeight = globalVars.defaultHeaderHeight;
    minHeight = globalVars.minHeaderHeightSmall;

    constructor() {
        super();
        this.state = {
            open: false,
            height: this.defaultHeight,
            transition: null
        }
    }

    toggleOpen() {

        // Toggle transition. This is needed because if the component always
        // has a transition it interferes with the header's scroll-dependent
        // auto resizing.
        !this.state.open ?
            this.setState({transition: 'height 0.25s cubic-bezier(0.77,0.2,0.05,1.0)'}) :
            setTimeout(() => {this.setState({transition: 'unset'})}, 30); // send help

        this.setState({
            open: !this.state.open
        });
    }

    checkWidth() {
        return window.innerWidth > 768; // possibly store in variable
    }

    setMinHeight() {
        this.minHeight = this.checkWidth() ? globalVars.minHeaderHeightLarge : globalVars.minHeaderHeightSmall;
        this.setHeight();
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
        this.setMinHeight();
        window.addEventListener('scroll', this.setHeight.bind(this));
        window.addEventListener('resize', this.setMinHeight.bind(this));

        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && this.state.open === true) {
              this.toggleOpen();

              document.getElementById('menu-checkbox').checked = false;
            }
        }.bind(this));
    }

    /* maybe a utilities folder somewhere...
    checkReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion)');
    }
    */

    render() {
        return (
            <StyledHeader
                open={this.state.open}
                style={{
                    height: `${this.state.height}px`,
                    transition: `${this.state.transition}`,
                }}
            >
                <Menu
                    toggleOpen={this.toggleOpen.bind(this)} 
                    open={this.state.open}
                />
                <Brand open={this.state.open} />
                <DarkToggle open={this.state.open}/>
            </StyledHeader>
        );   
    }
}