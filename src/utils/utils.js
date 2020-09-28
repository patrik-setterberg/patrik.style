/*
    Used to toggle component's tabindex.
    The passed component should have a boolean state
    variable called 'keyboardNav', and have its tabIndex
    be set depending on this variable, e.g.
    tabIndex={this.state.keyboardNav ? '0' : '-1'}
*/
const updateKeyboardNavState = (component, prevprops) => {
    if(component.props.open !== prevprops.open) {
        if (component.props.open === false) {
            component.setState({
                keyboardNav: false
            });
        } else {
            component.setState({
                keyboardNav: true
            });
        }
    }
}

export {updateKeyboardNavState};