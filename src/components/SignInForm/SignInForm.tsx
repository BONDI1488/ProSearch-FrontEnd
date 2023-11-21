import React, {useState, useEffect, useContext} from 'react';
import {useFormik} from 'formik';
import showImg from '../../img/show.png';
import hideImg from '../../img/hide.png';
import axios from 'axios';
import classes from "./SignInForm.module.css";
import {InterfaceContext} from "../../context";
import {Main} from "../../pages";
import { Login } from 'queries/api';

const SignInForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { toggleDisplayProfileModalFun, toggle, isDisplayProfileModal, isDisplayHeaderModal, isSignupFormDisplay } = useContext(InterfaceContext);
    const { toggleSingupFormDisplayFun, toggleDisplayProfileModalFun } = useContext(InterfaceContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: false,
        },
        onSubmit: async (values) => {
            try {
                const response = await Login({email: values.email, password: values.password, type: values.role === false ? 'user' : 'worker'})
                const receivedToken = response.data;
                localStorage.setItem('token', JSON.stringify(receivedToken));
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
        },
    });

        return (

            <form onSubmit={formik.handleSubmit}
                  className='flex flex-col max-w-sm	 mx-auto w-370 h-547 bg-gray-100 rounded-xl p-6 absolute z-10 right-20 drop-shadow-lg'>
                <div className='flex'>
                    <p className="text-3xl font-bold tracking-tight	mb-5">Вхід</p>
                    <button onClick={toggleDisplayProfileModalFun} className={classes.closeButton}>
                        &times;
                    </button>
                </div>
                <div className=' bg-black h-px  mb-5 '></div>
                <div className="mb-3">
                    <label htmlFor="email" className="text-sm font-light	tracking-tight text-gray-500">Ел.
                        почта</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="border p-2  w-full rounded-lg"
                    />
                </div>

            <div className="mb-3 relative">
                <label htmlFor="password" className="text-sm font-light	tracking-tight text-gray-500">Придумайте
                    пароль</label>
                <div className="flex">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="border p-2  w-full pr-10 rounded-lg"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-1 top-6 p-2  rounded"
                    >
                        <img
                            src={showPassword ? hideImg : showImg}
                            alt={showPassword ? "Hide" : "Show"}
                            className="h-7 w-7"
                        />
                    </button>
                </div>
            </div>

            <button type="submit" className="bg-amber-200 rounded-lg p-2 mx-12 my-5">Увійти</button>
            <button onClick={toggleSingupFormDisplayFun} className={classes.a}>Зареєструватись</button>

            <div className='flex items-center content-center mt-3'>
                <label htmlFor="confirmationCheckbox">Worker?</label>
                <input
                    name="role"
                    type="checkbox"
                    onChange={formik.handleChange}
                    className="border p-2 ml-5 rounded-lg"
                />
            </div>
        </form>

        );
    };


export default SignInForm;


