import React from 'react'
import styled from 'styled-components';
import {withFormik, Field, Form} from "formik";
import * as Yup from 'yup';


const StyledForm = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        background: brown;
        padding: 2vh;
        border-radius: 22px




`

//

function ProjectForm({values, handleChange, touched, errors}){

    return(
        <StyledForm>
            <Form>
                <label name='name'/>
                <Field name='name' type='text' placeholder='Enter your name here' value={values.name}/>
                {touched.name && errors.name && 
                    (<p>{errors.name}</p>)
                }

                <label name='email'/>
                <Field name='email' type='text' placeholder='Enter your email here' values={values.email}/>
                {touched.email && errors.email && (
                    <p>{errors.email}</p>
                )}

                <label name='password'/>
                <Field name='password' type='text' placeholder='Enter your password here' value={values.password}/>
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}

                <label name='TOS'/>
                <Field name='TOS' type='checkbox' placeholder='Check if you agree to the Terms of Service' value={values.TOS}/>
                {errors.TOS && (
                    <p>{errors.TOS}</p>
                )}

                <button type="submit">Submit</button>
            
            </Form>
        </StyledForm>
    )
}

const FormikProjectForm = withFormik({
    mapPropsToValues({}){
        return{
            name: "",
            email: "",
            password: "",
            TOS: false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Must enter a name"),
        email: Yup.string().required("Must enter an email"),
        password: Yup.string().required("Must enter a password"),
        TOS: Yup.boolean().oneOf([true],"Must agree for service")
    })



})(ProjectForm)

export default FormikProjectForm;