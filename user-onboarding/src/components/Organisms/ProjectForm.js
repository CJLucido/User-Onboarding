import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

function ProjectForm({values, handleChange, touched, errors, status}){

        const [users, setUsers] = useState([])
        useEffect(()=> {
            status && setUsers(users => [...users, status]);
        }, [status])

    return(
        <StyledForm>
            <Form>
                <label name='name'/>
                <Field name='name' type='text' placeholder='Enter your name here' value={values.name} onChange={handleChange}/>
                {touched.name && errors.name && 
                    (<p>{errors.name}</p>)
                }

                <label name='email'/>
                <Field name='email' type='text' placeholder='Enter your email here' values={values.email} onChange={handleChange}/>
                {touched.email && errors.email && (
                    <p>{errors.email}</p>
                )}

                <label name='password'/>
                <Field name='password' type='password' placeholder='Enter your password here' value={values.password} onChange={handleChange}/>
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}

                <label name='TOS'/>
                <Field name='TOS' type='checkbox' placeholder='Check if you agree to the Terms of Service' value={values.TOS} onChange={handleChange}/>
                {errors.TOS && (
                    <p>{errors.TOS}</p>
                )}

                <button type="submit">Submit</button>
            
            </Form>
        </StyledForm>
    )
}

const FormikProjectForm = withFormik({
    mapPropsToValues({name, email, password, TOS}){
        return{
            name: "",
            email: "",
            password: "",
            TOS: false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Must enter a name"),
        name: Yup.string().min(2, "Too short of a name, Spaghetti O's"),
        email: Yup.string().required("Must enter an email"),
        email: Yup.string().email(),
        password: Yup.string().required("Must enter a password"),
        password: Yup.string().min(6, "Too Short a password."),
        //password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{}$/,
        //"Must Contain One Uppercase, One Lowercase, One Number and one special case Character"),
        TOS: Yup.boolean().oneOf([true],"Must agree for service")
    }),
    handleSubmit(values, {setStatus}){
        axios.post('https://reqres.in/api/users')
        .then(res => {
            console.log("this is the response", res)
        })
        .catch(err => {
            console.log("There are no more rations", err)
        })
    }



})(ProjectForm)

export default FormikProjectForm;