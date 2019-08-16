import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super();
    console.log('props in App', props)

  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state)

  return {
    name: state.name
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);
