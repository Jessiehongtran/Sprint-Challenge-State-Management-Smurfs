import React, {useState} from 'react';
import {Form, Field, withFormik} from 'formik'
import { connect } from 'react-redux';
import { addSmurfs} from '../actions/smurfAction';

const SmurfForm =(props) => {

    // console.log('props in SmurfForm', props)
    const [newSmurf, setNewSmurf] = useState({name: "", age: ""})
    
    const handleChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('newSmurf', newSmurf)
        // props.addSmurfs(newSmurf)
       
    }

    return(
            
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        value={newSmurf.name} 
                        onChange={e => handleChange(e)} />
                    <input 
                        type="text" 
                        name="age" 
                        placeholder="age"  
                        value={newSmurf.age} 
                        onChange={e => handleChange(e)}/>
                </form>
                <button type="Submit">Add</button>
            </div>
        )
    
}

export default SmurfForm;