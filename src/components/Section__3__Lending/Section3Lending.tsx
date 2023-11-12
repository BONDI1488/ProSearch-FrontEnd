import React from 'react';
import Search from '../../img/search.png'
const Section3Lending = () => {
    return (
        <section className='max-w-full bg-teal-200 h-64		'>
            <div className='  text-center'>
                <p className='text-3xl font-light pt-14'>Не знайшли потрібну послугу? Використовуйте пошук!</p>
                <div className='pt-16 flex justify-center'>
                    <input className='py-1 px-2 w-96 h-10 outline-none	rounded-s-lg' placeholder='Яку роботу потрібно зробити?' type="text" name="" id=""/>
                    <button className='bg-amber-100 h-10 py-1 px-2 rounded-r-lg'><img
                        className='h-8 w-8'
                        src={Search} alt=""/></button>
                </div>
            </div>
        </section>
    );
};

export default Section3Lending;