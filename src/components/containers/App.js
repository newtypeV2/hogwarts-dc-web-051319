import React, { Component } from 'react';
import '../../App.css';
import Nav from '../presentational/Nav';
import HogCont from '../containers/HogContainer';
import hogs from '../../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogCont porks={hogs} />

      </div>
    )
  }
}

export default App;
