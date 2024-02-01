import React, { useRef } from 'react'

const FormRef = () => {
    const inputname = useRef();
    const inputemail = useRef();
    const inputmobile = useRef();
    const formstatus = useRef();

    const formsubmitfn = () => {
        console.log('form submiteed.');
        let name = inputname.current.value;
        let email = inputemail.current.value;
        let mobile = inputmobile.current.value;
        console.log(name, email, mobile);

        formstatus.current.innerHTML = 'Thanks for registering. You are successfully registered.'
    }
    return (
        <div>
            <h2>Form - Ref</h2>

            <div>
                <label>Name: </label>
                <input name="firstname" type="text" ref={inputname}/>
            </div>
            <div>
                <label>Email: </label>
                <input name="email" type="email" ref={inputemail}/>
            </div>
            <div>
                <label>Mobile: </label>
                <input name="mobile" type="text" ref={inputmobile} />
            </div>

            <div>
                <button onClick={formsubmitfn}>Register Here</button>
            </div>
            
            <div ref={formstatus}></div>

        </div>
    )
}

export default FormRef
