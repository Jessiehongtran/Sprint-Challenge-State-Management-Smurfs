import React from 'react';

const AdditionalSmurf = props => {
    console.log('props in AdditionalSmurf', props)
    return (
        <div>
            <button onClick={() => props.addSmurfs(props.smurf)}>
                Add Smurfs
            </button>
            <p>{props.smurf.name}</p>
        </div>
    )
}

export default AdditionalSmurf;