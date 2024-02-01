import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

const RegForm = () => {

    const formValues = {
        firstname: '',
        email: '',
        mobile: ''
    };

    const navigate = useNavigate();


    const submitFormFn = (values) => {
        console.log(values);
        //api call
        navigate('/emi')
    }


    return (
        <div>
            <h2>Registration Form</h2>

            <Formik initialValues={formValues} onSubmit={(values) =>submitFormFn(values)}>

                <Form>

                    <div>
                        <label>Name: </label>
                        <Field name="firstname" type="text"/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <Field name="email" type="email"/>
                    </div>
                    <div>
                        <label>Mobile: </label>
                        <Field name="mobile" type="text"/>
                    </div>

                    <div>
                        <button type='submit'>Register Here</button>
                    </div>


                </Form>
            </Formik>

        </div>
    )
}

export default RegForm



// name, email, mobile