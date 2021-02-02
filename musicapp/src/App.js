import React, { Component } from 'react';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import MusicApp from './ginieApp/MusicApp';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Test1 /> */}
        {/* <Test2 /> */}
        {/* <Test3 /> */}
        <MusicApp />
      </div>
    );
  }
}

export default App;