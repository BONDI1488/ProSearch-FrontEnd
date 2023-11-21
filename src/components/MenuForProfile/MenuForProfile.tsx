import React, {ChangeEvent, useContext, useState} from 'react';
import classes from "./MenuForProfile.module.css";
import User from "../../img/pngwing.com.png"
import {InterfaceContext, UserContext} from "../../context";

const MenuForProfile = () => {
    const { toggleDisplayProfileModalFun, toggleDisplayHeaderModalFun } = useContext(InterfaceContext)
    const { setAuthToken } = useContext(UserContext)
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuthToken('');
        toggleDisplayProfileModalFun()
    };

    return (
        <div className={`w-[270px] h-[450px] bg-gray-100 rounded-md drop-shadow-lg absolute top-[80px] right-[-10px] z-50`}>
            <div className={`py-2 px-4`}>
                <p className='text-center py-4 text-lg'>Замовник</p>
                <button className={classes.closeButton} onClick={toggleDisplayProfileModalFun}>
                    &times;
                </button>
                <hr/>
                <div className='flex justify-center pt-4 pb-2'>
                    <img
                        src={userPhoto}
                        alt=""
                        className='w-[130px] h-[130px] cursor-pointer rounded-full'
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
                </div>
                    <p className='text-center pb-4'>ІМЯ ПРОФІЛЯ!!!</p>
                <button className='text-xl pb-4'>Історія Замовлень</button>
                <br/>
                <button className='text-xl pb-4'>Зміна паролю</button>
                <br/>
                <button className='text-xl pb-4'>Редагувати профіль</button>
                <br/>
                <button onClick={handleLogout} className='text-xl'>Вийти</button>
            </div>
        </div>
    );
};

export default MenuForProfile;