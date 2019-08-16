import React from 'react';
import {Form, Field, withFormik} from 'formik'
import { connect } from 'react-redux';
import { addSmurfs} from '../actions/smurfAction';

class SmurfForm extends React.Component {
    constructor (props) {
        super(props);
        console.log('props in form', props)

    
    }


    render(){
        return (
           <div>
                <Form>
                    <Field type="text" name="name" placeholder="name"/>
                    <Field type="text" name="age" placeholder="age"/>
                    <Field type="text" name="height" placeholder="height"/>
                    <button>Add</button>
                </Form>
           </div> 
        )
    }
}

const SmurfFormik = withFormik({
    mapPropsToValues(values){
        return {
            name: values.name || '',
            age: values.age || '',
            height: values.height || '',
        }
    },

    handleSubmit(values) {
        console.log('values in handleSubmit', values)
        
    }
    
}
)(SmurfForm)


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
    { addSmurfs}
  )(SmurfFormik);
  