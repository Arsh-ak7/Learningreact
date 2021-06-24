import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import firebase from '../config/firebase'
import '../CSS/Login.css'

export default function Login() {
    const [form , setForm] = useState({email:"" , password:""});
    const [isLoading, setIsLoading] = useState(false);
    const [err,setError] = useState("");
    const history = useHistory();
    function handleForm(e){
        if(isLoading) return;
        setIsLoading(true);
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then((res)=>{
            history.replace("/home");
            setError("");
            setIsLoading(false);
        }).catch(err=>{
            setError(err.message)
            setIsLoading(false);
        })
    }
    function handleInput(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <div className="login">
            <div className="login-cover">
               <div className="login-wrapper">
                   <div className="login-form">
                        <h1 className="login-header">LogIn</h1>
                        <form onSubmit={handleForm}>
                            {err!=="" && <p className="err-message">{err}</p>}
                            <input type="email" className = "input-field" name ="email"placeholder ="Email or Phone Number" value ={form.email} onChange={handleInput} />
                            <input type="password" className = "input-field" name="password" placeholder ="Password" value ={form.password} onChange={handleInput} />
                            <button type="submit" className="login-button">
                            {isLoading ? "Logging in" : "Login" }
                            </button>
                        </form>
                        <div className="remember-me">
                           <span><Checkbox className="checkbox" />
                            Remember Me</span>
                            <span>Need help?</span>
                        </div>
                        <div className="sign-up-new">
                            <span>New to Netflix?</span>
                            <Link className="signup-link" to="/SignUp">SignUp Now</Link>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
