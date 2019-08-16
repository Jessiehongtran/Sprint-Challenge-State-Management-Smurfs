import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import AddedSmurf from './AddedSmurf';
import {getSmurfs, addSmurfs} from '../actions/smurfAction';
import Loader from 'react-loader-spinner';
import AdditionalSmurf from './AdditionalSmurf'


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
          <AddedSmurf smurf = {smurf}/>
        )}

        {/* {this.props.additionalSmurfs.map (smurf =>
          <AdditionalSmurf smurf = {smurf} addSmurfs = {this.props.addSmurfs}/>
          )} */}

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
    additionalSmurfs: state.additionalSmurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurfs}
)(App);
