import React, {useState, useEffect, useContext} from 'react';
import {useFormik} from 'formik';
import showImg from '../../img/show.png';
import hideImg from '../../img/hide.png';
import classes from "./SignInForm.module.css";
import {InterfaceContext, UserContext} from "../../context";
import { Login } from 'queries/api';

const SignInForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { toggleSingupFormDisplayFun, toggleDisplayHeaderModalFun } = useContext(InterfaceContext)
    const { setAuthToken, setUserRole } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: false,
        },
        onSubmit: async (values) => {
            try {
                const response = await Login({email: values.email, password: values.password, type: values.role === false ? 'user' : 'worker'})
                // if (response.status === 200) {
                    const receivedToken = response.data.token;
                    localStorage.setItem('token', JSON.stringify(receivedToken));
                    setAuthToken(response.data.token)
                    toggleDisplayHeaderModalFun()
                    if (values.role) setUserRole('worker'); else setUserRole('user');
                // }
            } catch (error) {
                console.error(error);
            }
        },
    });

        return (
            <div className='w-[330px] h-547 bg-gray-100 rounded-xl p-6 absolute z-10 top-[80px] left-[-50px] drop-shadow-lg'>
                <form onSubmit={formik.handleSubmit}
                      className='flex flex-col max-w-sm	 mx-auto'>
                    <div className='flex'>
                        <p className="text-3xl font-bold tracking-tight	mb-5">Вхід</p>
                        <button onClick={toggleDisplayHeaderModalFun} className='absolute top-[20px] right-[30px]'>
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

                    <div className='flex items-center content-center mt-3'>
                        <input
                            name="role"
                            type="checkbox"
                            onChange={formik.handleChange}
                            className="border p-4 w-[20px] h-[20px] mr-3 rounded-lg"
                        />
                        <label htmlFor="confirmationCheckbox" className="tracking-tight text-gray-500 font-light">Worker?</label>
                    </div>

                    <button type="submit" className="bg-amber-200 rounded-lg p-2 mx-12 my-5">Увійти</button>
                    <button onClick={toggleSingupFormDisplayFun} className={classes.a}>Зареєструватись</button>
                </form>
            </div>
        );
    };


export default SignInForm;


