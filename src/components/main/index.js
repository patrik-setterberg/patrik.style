import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../container';

const StyledMain = styled.main`
    flex: 1 1 auto;
    margin-top: var(--main-margin-top);
`

const StyledContainer = styled(Container)`
    
    /* a bunch of temp styles */
    min-height: 1000px;

    & p {
        font-size: 1.25rem;
        line-height: 1.5;
    }

    & p + p {
        margin-top: 1.25rem;
    }

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
`

export default class Main extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <>
            <StyledMain>
                <StyledContainer>
                    <h3>React is fun.</h3>
                    <p>Vitae tempus quam pellentesque nec nam aliquam sem et. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Duis ut diam quam nulla porttitor massa. Laoreet non curabitur gravida arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus in ornare. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Velit scelerisque in dictum non consectetur a erat nam. Platea dictumst quisque sagittis purus. Quis auctor elit sed vulputate mi. Ipsum dolor sit amet consectetur. Pellentesque id nibh tortor id aliquet. Quam vulputate dignissim suspendisse in est ante in nibh. Quis ipsum suspendisse ultrices gravida. Arcu cursus euismod quis viverra nibh. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Volutpat commodo sed egestas egestas fringilla. Ut etiam sit amet nisl. Netus et malesuada fames ac. Tempus iaculis urna id volutpat lacus laoreet. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Est placerat in egestas erat imperdiet sed euismod nisi. Diam volutpat commodo sed egestas egestas fringilla.</p>
                    <p>Faucibus in ornare quam viverra orci sagittis eu volutpat. Lacus viverra vitae congue eu. Risus sed vulputate odio ut enim blandit volutpat. Lacus luctus accumsan tortor posuere ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac ut. Eu mi bibendum neque egestas congue. Nulla malesuada pellentesque elit eget gravida cum sociis. Semper feugiat nibh sed pulvinar. Pretium aenean pharetra magna ac placerat. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Convallis posuere morbi leo urna molestie at elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                    <p>Pellentesque sit amet porttitor eget dolor. Ac tortor vitae purus faucibus ornare suspendisse. Sodales ut eu sem integer vitae justo eget magna. Non enim praesent elementum facilisis leo vel. Et magnis dis parturient montes nascetur. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Amet facilisis magna etiam tempor. Arcu cursus vitae congue mauris rhoncus aenean vel. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Fermentum posuere urna nec tincidunt praesent semper feugiat. Blandit massa enim nec dui nunc mattis enim. Pellentesque habitant morbi tristique senectus. Varius vel pharetra vel turpis nunc eget lorem. Sit amet mauris commodo quis imperdiet massa. Varius duis at consectetur lorem donec massa sapien. Eu nisl nunc mi ipsum faucibus.</p>
                    <p>Ut morbi tincidunt augue interdum. Vitae tempus quam pellentesque nec nam aliquam sem et. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Duis ut diam quam nulla porttitor massa. Laoreet non curabitur gravida arcu. In fermentum et sollicitudin ac. Eget duis at tellus at urna condimentum mattis. Amet consectetur adipiscing elit ut aliquam purus sit. Id porta nibh venenatis cras sed felis. Volutpat ac tincidunt vitae semper. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. At volutpat diam ut venenatis tellus. Eget velit aliquet sagittis id consectetur. Faucibus turpis in eu mi bibendum neque egestas congue. Dictum non consectetur a erat nam at lectus. Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
                    <p>Velit scelerisque in dictum non consectetur a erat nam. Platea dictumst quisque sagittis purus. Quis auctor elit sed vulputate mi. Ipsum dolor sit amet consectetur. Pellentesque id nibh tortor id aliquet. Quam vulputate dignissim suspendisse in est ante in nibh. Quis ipsum suspendisse ultrices gravida.</p>
                    <p>Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Fermentum posuere urna nec tincidunt praesent semper feugiat. Blandit massa enim nec dui nunc mattis enim. Pellentesque habitant morbi tristique senectus. Varius vel pharetra vel turpis nunc eget lorem. Sit amet mauris commodo quis imperdiet massa.</p>
                    <p>Volutpat lacus laoreet non curabitur gravida arcu.</p>
                </StyledContainer>
            </StyledMain>
            </>
        );
    }
}