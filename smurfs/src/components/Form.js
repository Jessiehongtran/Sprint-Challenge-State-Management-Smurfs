import React from 'react';
import {Form, Field, withFormik} from 'formik'

class SmurfForm extends React.Component {
    constructor (props) {
        super(props);

    
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
    }

    
}
)(SmurfForm)

export default SmurfFormik