import React from 'react';


const AddedSmurf = (props) => {
    console.log('props in Smurf', props)

    return (
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>

        </div>
    )
}

export default AddedSmurf;