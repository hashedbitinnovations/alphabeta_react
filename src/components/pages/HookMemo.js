import React, { useEffect, useMemo, useState } from 'react'

const HookMemo = () => {

    const [cars, setCars] = useState(['honda', 'mahindra', 'tata', 'skoda', 'bmw'])
    const [status, setStatus] = useState(true);

    const rendersCars = (cars) => {
        console.log('rendering again on state update')
        return (
            <>
                {
                    cars.map((item) => (
                        <div>{item}</div>
                    ))
                }
            </>
        )
    }

    const renderMemoCars = useMemo(() => rendersCars(cars), [cars])


    useEffect(() => {
        console.log('state updated...')
    })

    return (
        <div>

            <h2>useMemo</h2>

            <button onClick={() => setStatus(!status)} className={status ? 'btn btn-danger' : 'btn btn-success'}>Red/Green</button>

            {/* {rendersCars(cars)} */}
            {renderMemoCars}

            <button onClick={() => setCars([...cars, 'XXXXXXX'])}>Add New Car</button>

        </div>
    )
}

export default HookMemo



// Memoization


// React.memo
// useMemo
// useCallback