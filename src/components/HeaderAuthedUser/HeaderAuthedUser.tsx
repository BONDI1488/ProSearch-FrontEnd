import React from 'react';
import Logo from '../../img/logo12123.png';
import classes from "./Header.module.css";
import Login from '../../img/pngwing.com.png';
import SignUpForm from "../SignUpForm/SignUpForm";

const HeaderAuthedUser = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();

    };

    return (
        <header className='bg-zinc-200 max-w-full h-72px'>
            <div className='max-w-screen-xl	flex justify-between mx-auto py-2'>
                <div className='flex items-center	'>
                    <img className='w-14 h-14 mr-1' src={Logo} alt=""/>
                    <a  href='#' className='text-2xl font-bold'>ProSearch</a>
                </div>
                <div className='flex items-center	'>
                    <a className='text-xl' href='#'>Створити замовлення</a>
                </div>
                <div className='flex items-center	'>
                    <input className='py-1 px-2 w-350px h-50px outline-none	rounded-s-lg' placeholder='Що потрібно зробити ?' type="text" name="" id=""/>
                    <button className='bg-amber-100	py-1 px-2 rounded-r-lg'>Знайти фахівця</button>
                </div>
                <div className='flex items-center	'>
                    <img className='w-12 h-12 mr-1' src={Login} alt=""/>
                    <div className='pl-4'>
                        <p className='text-lg'>Профіль</p>
                        <p className='text-sm text-gray-500'>Замовника</p>
                    </div>
                        <button onClick={handleLogout} className='text-sm'>Вийти</button>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuthedUser;


