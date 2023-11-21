import React, {useContext, useState} from 'react';
import Logo from '../../img/logo12123.png';
import Login from '../../img/pngwing.com.png';
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";
import {InterfaceContext} from "../../context";
import {Link} from "react-router-dom";
import MenuForProfile from "../MenuForProfile/MenuForProfile";
import Bag from "../../img/bag.png";
import User from "../../img/pngwing.com.png";
const Header = () => {
    const { toggleDisplayProfileModalFun, isDisplayProfileModal, isSignupFormDisplay } = useContext(InterfaceContext);
    const [isHeaderModal, toggleHeaderModal] = useState(false);

    const toggleHeaderModalFun = () => {
        toggleHeaderModal(!isHeaderModal);
    };

    const token = localStorage.getItem('token');

    return (
        <header className='bg-zinc-200 max-w-full h-72px'>
            <div className='max-w-screen-xl	flex justify-between mx-auto py-2'>
                <div className='flex items-center	'>
                    <Link to="/" className='flex items-center'>
                    <img className='w-14 h-14 mr-1' src={Logo} alt=""/>
                    <a  href='#' className='text-2xl font-bold'>ProSearch</a>
                    </Link>
                </div>
                <div className='flex items-center	'>
                    <a className='text-xl' href='#'>Створити замовлення</a>
                </div>
                <div className='flex items-center	'>
                    <input className='py-1 px-2 w-350px h-50px outline-none	rounded-s-lg' placeholder='Що потрібно зробити ?' type="text" name="" id=""/>
                    <button className='bg-amber-100	py-1 px-2 rounded-r-lg'>Знайти фахівця</button>
                </div>
                {token ?
                    <div className='flex items-center'>
                        <img className='w-12 h-12 mr-1' src={Login} alt=""/>
                        <a className='text-lg' href='#' onClick={toggleHeaderModalFun}>Вхід та реєстрація</a>
                    </div>
                    : <div className='flex justify-between'>
                        <div className='flex items-center mr-4'>
                            <button>
                                <img src={Bag} alt=""/>
                            </button>
                        </div>
                        <div className='flex items-center cursor-pointer px-4' onClick={toggleDisplayProfileModalFun}>
                            <img
                                src={User}
                                alt=""
                                className='w-12 h-12 cursor-pointer rounded-full'
                            />
                            <div className='pl-4'>
                                <p className='text-lg'>Профіль</p>
                                <p className='text-sm text-gray-500'>Замовника</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {isHeaderModal &&
                !isSignupFormDisplay ?
                    <SignInForm handleCloseModal={toggleHeaderModalFun} />
                : <SignUpForm/>
            }
            {
                isDisplayProfileModal && <MenuForProfile/>
            }
        </header>
    );
};

export default Header;


