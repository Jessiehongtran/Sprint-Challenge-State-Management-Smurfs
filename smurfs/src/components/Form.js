import React, {useState} from 'react';


const SmurfForm =(props) => {

    // console.log('props in SmurfForm', props)
    const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""})
    
    const handleChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('newSmurf', newSmurf)
        props.addSmurfs(newSmurf)
       
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
                    
                    <input 
                        type="text" 
                        name="height" 
                        placeholder="height"  
                        value={newSmurf.height} 
                        onChange={e => handleChange(e)}/>

                    <button type="Submit">Add</button>
                </form>
                
            </div>
        )
    
}

export default SmurfForm;