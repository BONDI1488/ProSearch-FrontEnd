import React, {ChangeEvent, useContext, useState} from 'react';
import Logo from '../../img/logo12123.png';
import classes from "./Header.module.css";
import Login from '../../img/pngwing.com.png';
import SignUpForm from "../SignUpForm/SignUpForm";
import Bag from '../../img/bag.png'
import User from "../../img/pngwing.com.png";
import axios from "axios";
import {Link} from "react-router-dom";
import {InterfaceContext} from "../../context";
import MenuForProfile from "../MenuForProfile/MenuForProfile";

// import jwt from 'jsonwebtoken';
const HeaderAuthedUser = () => {
    const { toggleDisplayProfileModalFun, isDisplayProfileModal } = useContext(InterfaceContext);
    const [userPhoto, setUserPhoto] = useState(User);

    const changePhoto = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                setUserPhoto(result);
            };
            reader.readAsDataURL(file);
        }
    };

// Використовуйте цю функцію для виклику при виборі фото
//     const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         const token = localStorage.getItem('token');
//         const userId = getUserIdFromToken(token);
//         if (file) {
//             changePhoto(YOUR_USER_ID, file);
//         }
//     };
//     const getUserIdFromToken = (token: string) => {
//         try {
//             const decodedToken: any = jwt.verify(token, 'super-secret'); // Замініть 'your-secret-key' на ваш секретний ключ
//             return decodedToken.id;
//         } catch (error) {
//             console.error('Error decoding token:', error);
//             return null;
//         }
//     };

    return (
        <header className='bg-zinc-200 max-w-full h-72px'>
            <div className='max-w-screen-xl	flex justify-between mx-auto py-2'>
                <div className='flex items-center	'>
                    <Link to="/" className='flex items-center'>
                        <img className='w-14 h-14 mr-1' src={Logo} alt=""/>
                        <a href='#' className='text-2xl font-bold'>ProSearch</a>
                    </Link>
                </div>
                <div className='flex items-center	'>
                    <a className='text-xl' href='#'>Створити замовлення</a>
                </div>
                <div className='flex items-center	'>
                    <input className='py-1 px-2 w-350px h-50px outline-none	rounded-s-lg'
                           placeholder='Що потрібно зробити ?' type="text" name="" id=""/>
                    <button className='bg-amber-100	py-1 px-2 rounded-r-lg'>Знайти фахівця</button>
                </div>
                <div className='flex items-center'>
                    <button>
                        <img src={Bag} alt=""/>
                    </button>
                </div>
                <div className='flex items-center pointer' onClick={toggleDisplayProfileModalFun}>
                    <img
                        src={userPhoto}
                        alt=""
                        className='w-12 h-12 cursor-pointer rounded-full'
                        onClick={() => document.getElementById('photoInput')?.click()}
                    />
                    <input
                        type="file"
                        id="photoInput"
                        name="photo"
                        accept="image/*"
                        style={{display: 'none'}}
                        onChange={changePhoto}
                    />
                    <div className='pl-4'>
                        <p className='text-lg'>Профіль</p>
                        <p className='text-sm text-gray-500'>Замовника</p>
                    </div>
                </div>
            </div>
            {
                isDisplayProfileModal && <MenuForProfile/>
            }
        </header>
    );
};

export default HeaderAuthedUser;


