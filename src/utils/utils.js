import React from 'react';

const toggleTabIndex = (component, prevprops) => {
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

export {toggleTabIndex};