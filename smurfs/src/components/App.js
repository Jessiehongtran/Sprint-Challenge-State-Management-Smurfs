import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import Smurf from './smurf';
import {getSmurfs} from '../actions/smurfAction';
import Loader from 'react-loader-spinner';


class App extends Component {
  constructor(props) {
    super();
    console.log('props in App', props)

  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux built by {this.props.author}</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick = {this.props.getSmurfs}> 
          {this.props.isLoading? 
            <Loader 
            type="Oval"
            color="gray"
            height="30"
            width="30"
            /> :
            'Discover smurfs'
          }
        </button>
        {this.props.smurfs.map(smurf => 
          <Smurf smurf = {smurf}/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state)

  return {
    author: state.author,
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs,
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);
