import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./AuthForWorker.module.css";
import User from "../../img/pngwing.com.png";
const AuthForWorker = () => {
    return (
        <div className='max-w-full'>
            <Header/>
            <div className='max-w-screen-lg mx-auto'>
                <p className='text-center text-4xl my-12'>Реєстрація Фахівця</p>
                <img src={User} alt="" className='w-44 h-44'/>
            </div>
            {/*<Footer/>*/}
        </div>
    );
};

export default AuthForWorker;