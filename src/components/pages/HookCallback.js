import React, { useState, useEffect, useCallback } from 'react';


const ChildComponent = React.memo((props) => {
    const {onNameChange} = props;
    useEffect(() => {
        console.log('child state updated....')
    })
    return(
        <>
            <button onClick={onNameChange}>Update Name</button>
        </>
    )
})

const HookCallback = () => {

    const [status, setStatus] = useState(true);
    const [name, setName] = useState('abcd');

    useEffect(() => {
        console.log('parent state updated...')
    })

    const updateName = () => {
        setName('xyz')
    }

    const renderCallbackChildComp = useCallback(updateName, [name])

    return (
        <div>

            <h2>useCallback</h2>

            <button onClick={() => setStatus(!status)} className={status ? 'btn btn-danger' : 'btn btn-success'}>Red/Green</button>
            <br></br>
            <ChildComponent onNameChange={renderCallbackChildComp}/>
            <br></br>

            {name}
            {/* <button onClick={updateName}>Update Name</button> */}
            <br></br><br></br>

        </div>
    )
}

export default HookCallback
