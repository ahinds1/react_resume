import React, { Component } from 'react';
import classes from './App.module.css';

import Resume from './containers/Resume';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Resume />
      </div>
    );
  }
}

export default App;
