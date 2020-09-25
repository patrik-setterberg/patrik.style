import React, {Component} from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

class App extends Component {

  componentDidMount() {
    document.body.addEventListener('mousedown', function() {
      document.body.classList.add('no-outline');
    });

    document.body.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
          document.body.classList.remove('no-outline');
        }
    });
  }

  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
  
}

export default App;
