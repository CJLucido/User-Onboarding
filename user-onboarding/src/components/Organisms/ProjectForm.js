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

//{values, handleChange, touched, errors}

function ProjectForm(){

    return(
        <StyledForm>
            <Form>
                <label name='name'/>
                <Field name='name' type='text' placeholder='Enter your name here'/>

                <label name='email'/>
                <Field name='email' type='text' placeholder='Enter your email here'/>

                <label name='password'/>
                <Field name='password' type='text' placeholder='Enter your password here'/>

                <label name='TOS'/>
                <Field name='TOS' type='checkbox' placeholder='Check if you agree to the Terms of Service'/>

                <button type="submit">Submit</button>
            
            </Form>
        </StyledForm>
    )
}

const FormikProjectForm = withFormik({




})(ProjectForm)

export default FormikProjectForm;