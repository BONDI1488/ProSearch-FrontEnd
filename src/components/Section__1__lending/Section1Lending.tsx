import React from 'react';
import classes from "./Section1Lending.module.css";
import Search from '../../img/search.png'
import {Link} from "react-router-dom";



const Section1Lending = () => {
        return (
        <section className='max-w-full  '>
            <div className='bg-sky-400	'>
                <div className='max-w-screen-xl relative mx-auto'>
                    <div className='  h-64	'>
                        <p className='text-5xl font-light	 absolute bottom-0 mb-5'>
                            Знайди фахівця та виріши <br/>
                            свою проблему
                        </p>
                    </div>
                </div>
            </div>
            <div className=' bg-yellow-300'>
                <div className='max-w-screen-xl relative mx-auto'>
                    <div className='h-64 flex'>
                        <div className='mt-5 flex left-0 absolute'>
                            <Link to='/order-form'>
                                <button className='bg-gray-100 rounded-lg h-12 w-64 border-solid border-2 border-sky-500'>
                                    <p className='text-xl'>Створити оголошення</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Section1Lending;

