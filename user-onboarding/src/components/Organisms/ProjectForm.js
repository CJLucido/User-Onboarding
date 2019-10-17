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

function ProjectForm({values, handleChange, touched, errors}){

    return(
        <StyledForm>
            Big form
        
        </StyledForm>
    )
}

export default ProjectForm;