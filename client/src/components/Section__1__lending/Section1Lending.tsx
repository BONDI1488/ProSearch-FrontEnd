import React from 'react';
import classes from "./Section1Lending.module.css";
import Search from '../../img/search.png'

const Section1Lending = () => {
    return (
        <section className='max-w-full  '>
            <div className='bg-yellow-200	'>
                <div className='max-w-screen-xl relative mx-auto'>
                    <div className='  h-64	'>
                        <p className='text-5xl absolute bottom-0 mb-5'>
                            Знайди фахівця та виріши <br/>
                            свою проблему
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-sky-300'>
                <div className='max-w-screen-xl relative mx-auto'>
                    <div className='h-64 flex'>
                        <div className='mt-5 flex left-0 absolute'>
                                <input className='py-2 px-4 w-80 h-50px outline-none	rounded-s-lg' placeholder='Спеціаліста' type="text" name="" id=""/>
                                <button className='bg-gray-200 py-1 px-2 rounded-r-lg text-xl flex justify-center items-center	'>
                                    <img className='w-7 h-7 mr-1' src={Search} alt=""/>
                                    Пошук</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Section1Lending;
