import React, { Component } from 'react';
import "./bootstrap.min.css";
import Button from './Button';
import Header from './header'

class App extends Component {
  render() {
    return (
      <div className="container">
          <Header/>
          <Button/>
      </div>

    );
  }
}

export default App;
