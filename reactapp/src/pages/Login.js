import React, { useState } from 'react'
import {  useHistory } from 'react-router-dom'
import firebase from "../config/firebase"

export default function Login() {
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState("")
    const [form, setform] = useState({email: "", password: ""})
    const history = useHistory();
    //const [isLoggedin, setisLoggedin] = useState(false)
    function handleForm(e){
        if(isLoading) return;
        setisLoading(true);
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then((res)=>{
            history.replace("/");
            seterror("");
            //setisLoggedin(true);
            setisLoading(false);
        }).catch(err =>{
            seterror(err.message)
            setisLoading(false);
        })
    }
    function handleInput(e){
        setform({...form,[e.target.name]:e.target.value});
    }

    //if(isLoggedin)
    //return (<Redirect to="/" />)
    return (
        <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg bg-gradient-to-br from-gray-800 to-gray-400">
            {error !== "" && <p>{error}</p>}
            <form className ="m-5 w-10/12" onSubmit={handleForm}>
                <h1 className="w-full text-4xl tracking-widest text-center my-6">
                    Login
                </h1>
                <div className ="w-full my-6">
                    <input type="email" name ="email" className="p-2 shadow w-full text-black" placeholder="Email or Username" value = {form.email} onChange={handleInput}/>
                </div>
                <div className="w-full my-6">
                    <input type ="password" name="password" className="p-2 shadow w-full text-black" placeholder="Password" value ={form.password} onChange ={handleInput} />
                </div>
                <div className="w-full my-10  text-xl">
                    <button type="submit" className="p-1 rounded shadow w-full text-black bg-gradient-to-tr from-yellow-600 to-yellow-400">
                        {
                            isLoading ? <i className ="fas fa-circle-notch fa-spin"></i> : "Login"
                        }
                    </button>
                </div>
            </form>
        </div>
        </div>  
    )
}
