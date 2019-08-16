import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import AddedSmurf from './AddedSmurf';
import {getSmurfs, addSmurfs} from '../actions/smurfAction';
import Loader from 'react-loader-spinner';
import SmurfFormik from './Form'
import SmurfForm from './Form'




class App extends Component {
  constructor(props) {
    super();
    console.log('props in App', props)
    this.state = {
      newSmurf: []
    }
    
  }

  componentDidMount(){
    this.setState()
  }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to SMURFS VILLAGE built by {this.props.author}</h1>
        
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
        {/* <SmurfFormik/>  */}
        <SmurfForm addSmurfs={this.props.addSmurfs}/>
          
        {/* <form onSubmit={this.props.addSmurfs}>
          <input type="text" name="name" value= {this.newSmurf.name} />
          <input type="text" name="age" value= {this.newSmurf.age} />
          <input type="text" name="name" value= {this.newSmurf.name} />
          <button>Add</button>
        </form> */}


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
