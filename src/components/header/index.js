import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Menu from './components/menu';
import Brand from './components/brand';


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: auto;
    background: linear-gradient(to bottom, #283a42, #37505C, #283a42);
    flex: 0 0 auto;
    border-bottom: 2px solid #333;
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.4);
    min-height: 100px;
    max-height: 700px;
    position: sticky;
    top: 0;
    /* transition: height 0.2s cubic-bezier(0.77,0.2,0.05,1.0); */

    ${props => props.open && css`
        z-index: 3;
        height: 700px !important;`    
    }
`

export default class Header extends Component {
    
    constructor() {
        super();
        this.state = {
            open: false,
            height: 200
        }
    }

    toggleOpen() {
        this.setState({
            open: this.state.open === false ? true : false
        });

        setTimeout(() => {
            console.log(this.state);
        }, 20);           
    }

    setHeight() {
        this.setState({
            scrollHeight: window.scrollY
        });
        console.log('hee');
    }

    render() {
        return (
            <StyledHeader open={this.state.open} onScroll={this.setHeight.bind(this)} style={{height: `${this.state.height}px`}}>
                <Menu
                    toggleOpen={this.toggleOpen.bind(this)} 
                    open={this.state.open}
                />
                <Brand open={this.state.open} />
            </StyledHeader>
        );   
    }
}