import React, { Component } from 'react';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Todos from './todolist/Todos';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Test1 /> */}
        {/* <Test2 /> */}
        {/* <Test3 /> */}
        {/* <Test4 /> */}
        {/* <Test5 /> */}

        <Todos />
      </div>
    );
  }
}

export default App;