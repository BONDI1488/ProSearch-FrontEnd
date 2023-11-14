import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./AuthForWorker.module.css";
import User from "../../img/pngwing.com.png";
import FormForRegisterWorker from "../../components/FormForRegisterWorker/FormForRegisterWorker";
const AuthForWorker = () => {

    return (
        <div className='max-w-full'>
            <Header/>
            <FormForRegisterWorker/>

            {/*<Footer/>*/}
        </div>
    );
};

export default AuthForWorker;