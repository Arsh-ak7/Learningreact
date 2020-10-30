import React from 'react'
import Home from '../Pages/Home'
import Start from '../Pages/Start'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

export default [
    {
        path:'/',
        exact: true,
        component: () => <Start />,
        protected: null
    },
    {
        path:'/login',
        component: () => <Login />,
        protected: "guest"
    },
    {
        path:'/signup',
        component: () => <SignUp />,
        protected: "guest"
    },
    {
        path:'/home',
        component: () => <Home />,
        protected: "auth"
    },
]