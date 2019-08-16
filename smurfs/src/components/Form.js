import React from 'react';
import {Form, Field, withFormik} from 'formik'
import { connect } from 'react-redux';
import { addSmurfs} from '../actions/smurfAction';

class SmurfForm extends React.Component {
    constructor(props){
        super(props);
        console.log('props in SmurfForm', props)
        this.state= {
            newSmurf: {}
        }
    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('newSmurf',this.state.newSmurf)
        // this.props.addSmurfs(this.state.newSmurf)
    }


    render(){
        return(
            <div>
                <form onClick={this.handleSubmit}>
                    <input type="text" name="name" placeholder="name" value={this.state.newSmurf.name} onChange={this.handleChange}/>
                    <input type="text" name="age" placeholder="age"  value={this.state.newSmurf.age} onChange={this.handleChange}/>
                </form>
                <button>Add</button>
            </div>
        )
    }
}

export default SmurfForm;