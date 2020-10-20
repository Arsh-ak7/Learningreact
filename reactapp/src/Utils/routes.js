import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";
import SignUp from "../pages/SignUp";
import Tensorflow from "../pages/Tensorflow";

export default [
    {
        path: '/',
        exact: true,
        component: ()=> <Home />,
        protected: null
    },
    {
        path: '/login',
        component: ()=> <Login />,
        protected:"guest"
    },
    {
        path: '/gallery',
        component: ()=> <Gallery />,
        protected: "auth"
    },
    {
        path: '/signup',
        component: ()=> <SignUp />,
        protected: "guest"
    },
    {
        path: '/tensorflow',
        component: ()=> <Tensorflow />,
        protected: null
    }
]