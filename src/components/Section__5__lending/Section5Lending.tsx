import React from 'react';
import { Link } from 'react-router-dom';

const Section5Lending = () => {
    return (
        <div className='w-full flex justify-center items-center my-20'>
            <div className='flex items-center'>
                <p className='text-xl text-center'>Шукай вигідні замовлення за <br/>допомогою сервісу ProSearch</p>
                <Link to="/auth-for-worker" className='bg-amber-100 p-3 text-2xl rounded-lg ml-3'>
                    Стати фахівцем
                </Link>
            </div>
        </div>
    );
};

export default Section5Lending;
