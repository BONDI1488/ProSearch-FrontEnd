import React from 'react';
import classes from "./SignIn.module.css";
import ImputForWorker from "./InputForWorker/ImputForWorker";

const SignIn = () => {
    return (
        <div className='h-96 w-80 shadow-xl bg-gray-300 rounded-2xl	 m-44'>
            <div className=' mx-8'>
                <p className='text-4xl py-4 font-semibold	'>Вхід</p>
                <hr className={classes.hr}/>
            </div>

        </div>
    );
};

export default SignIn;