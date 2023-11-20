import React from 'react';
import classes from "./Section2Lending.module.css";
import Wrench from '../../img/wrench.png'
import House from '../../img/house.png'
import Brick from '../../img/brick.png'

const Section2Lending = () => {
    return (
        <section className='max-w-screen-xl mx-auto pb-28'>
            <div className='mt-20'></div>
            <p className='text-center text-5xl font-light	 mb-10'>Список послуг</p>
            <div className='flex justify-between px-16'>
                <div className='flex '>
                    <img className='w-16 h-16' src={Wrench} alt=""/>
                    <div className='mt-4 ml-2'>
                        <p className='text-3xl mb-4'>Домашній майстер</p>
                        <ul>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Сантехнік</a>
                            </li>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Електрик</a>
                            </li>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Слотяр</a>
                            </li>
                        </ul>
                    </div>
                </div><div className='flex '>
                    <img className='w-16 h-16' src={House} alt=""/>
                    <div className='mt-4 ml-2'>
                        <p className='text-3xl mb-4'>Побутові послуги</p>
                        <ul>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Сад і город</a>
                            </li>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Няні</a>
                            </li>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Послуги доиоробітниці</a>
                            </li>
                        </ul>
                    </div>
                </div><div className='flex '>
                    <img className='w-16 h-16' src={Brick} alt=""/>
                    <div className='mt-4 ml-2'>
                        <p className='text-3xl mb-4'>Будівельні роботи</p>
                        <ul>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Різноробочі</a>
                            </li>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Бетонні роботи</a>
                            </li>
                            <li className=' text-lg'>
                                <a className={classes.link} href='#'>Бурові роботи</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2Lending;