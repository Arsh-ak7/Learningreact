import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from "../config/firebase"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
const history = useHistory();
    return (
        <Formik 
            initialValues = {{email: '', password: ''}}
            onSubmit= {(value,formikBag) =>{
                firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
                .then(res =>{
                    history.replace('/');
                }).catch(err =>{
                    formikBag.setFieldError("email",err.message)
                })
            }}
            validationSchema= {Yup.object({
                email: Yup.string().required("Email is required").email("Email is invalid"),
                password: Yup.string().required("Password is required"),
            })}
            >
            {
                <div className="flex h-screen bg-gray-200">
                 <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg bg-gradient-to-br from-gray-800 to-gray-400">
    
            <Form className ="m-5 w-10/12">
                <h1 className="w-full text-4xl tracking-widest text-center my-6">
                    SignUp
                </h1>
                <div className ="w-full my-6">
                    <Field name="email" type="email" className="p-2 shadow w-full text-black" placeholder="Email or Username"/>
                    <ErrorMessage name ="email" />
                </div>
                <div className="w-full my-6">
                    <Field name="password" type ="password" className="p-2 shadow w-full text-black" placeholder="Password"/>
                    <ErrorMessage name="password" />
                </div>
                <div className="w-full my-10  text-xl">
                    <button type="submit" className="p-1 rounded shadow w-full text-black bg-gradient-to-tr from-yellow-600 to-yellow-400">
                        SignUp
                    </button>
                </div>
            </Form>
        </div>
        </div>  
            
            }
        
        
        </Formik>
    )
}
