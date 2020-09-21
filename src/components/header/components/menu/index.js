import React, {Component} from 'react';
import styled from 'styled-components';
import Hamburger from '../hamburger';
import MenuList from '../menu_list';

const Nav = styled.nav`
    flex: 0 0 auto;
    height: 100%;
`

const MenuWrapper = styled.div`
    display: block;
    position: relative;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 1;
    user-select: none;

    @media only screen and (min-width: 768px) {
        top: 2rem;
        left: 2rem;
    }
`

export default class Menu extends Component {

    render() {
        return(
            <Nav>
                <MenuWrapper>
                    <Hamburger toggleOpen={this.props.toggleOpen.bind(this)}/>
                    <MenuList {...this.props}/>
                </MenuWrapper>
            </Nav>
        );
    }
}
