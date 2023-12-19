import React, { useState } from "react";


const ShowHideFn = () => {

    const [status, setStatus] = useState(true);
    
    // Not Actual implementation
    // console.log(' Line No - 7', status)
    // setStatus(false)
    // console.log(' Line No - 9', status)
    // setStatus(true)
    // console.log(' Line No - 13', status)
    // setTimeout(() => {
    //     console.log(' Line No - 16 after 1 sec', status)
    // }, 1000)

    const showContentFn = () => {
        setStatus(true)
    }

    const hideContentFn = () => {
        setStatus(false)
    }

    return (
        <>
            <h2>Show Hide Implementation</h2>

            <button onClick={showContentFn} disabled={status}>Show Content</button>
            <button onClick={hideContentFn} disabled={!status}>Hide Content</button>

            {
                status && <div id='content'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </div>
            }

        </>
    )
}

export default ShowHideFn;


// HW - Hide and show using a single button and single function