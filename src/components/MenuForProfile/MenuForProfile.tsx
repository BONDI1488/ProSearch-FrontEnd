import React from 'react';
import User from "../../img/pngwing.com.png"
import classes from "./MenuForProfile.module.css";

const MenuForProfile = () => {
    return (
        <div className=' w-[270px] h-[450px] bg-gray-100 rounded drop-shadow-lg'>
            <p className='text-center py-4 text-lg'>Замовник</p>
            <button className={classes.closeButton}>
                &times;
            </button>
            <hr/>
            <div className='flex justify-center pt-4 pb-2'>
                <img src={User} className='w-[130px] h-[130px]' alt=""/>
            </div>
                <p className='text-center pb-4'>ІМЯ ПРОФІЛЯ!!!</p>
            <button className='text-xl py-2 px-4'>Історія Замовлень</button>
            <br/>
            <button className='text-xl py-2 px-4'>Зміна паролю</button>
            <br/>
            <button className='text-xl py-2 px-4'>Редагувати профіль</button>
            <br/>
            <button className='text-xl py-2 px-4'>Вихід</button>
        </div>
    );
};

export default MenuForProfile;