import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./AuthForWorker.module.css";
import User from "../../img/pngwing.com.png";
import FormForRegisterWorker from "../../components/FormForRegisterWorker/FormForRegisterWorker";
import { Link } from 'react-router-dom';

const AuthForWorker = () => {
    return (
        <div className='max-w-full'>
            <Header />
            <FormForRegisterWorker />
            <div className='absolute -bottom-1 w-full'>
            <Footer/>
            </div>
        </div>
    );
};

export default AuthForWorker;
