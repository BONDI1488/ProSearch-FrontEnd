import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import showImg from '../../img/show.png';
import hideImg from '../../img/hide.png';
import axios from 'axios';
import classes from "./SignInForm.module.css";
const SignInForm = () => {

    const [token, setToken] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(JSON.parse(storedToken));
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("https://prosearch-backend-01ffaf2c2114.herokuapp.com/auth/login", values);
                const receivedToken = response.data;
                setToken(receivedToken);
                localStorage.setItem('token', JSON.stringify(receivedToken));
                console.log(JSON.stringify(response.data, null, 2));
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (

        <form onSubmit={formik.handleSubmit} className='flex flex-col max-w-sm	 mx-auto w-370 h-547 bg-gray-100 rounded-xl p-6'>
            <p className="text-3xl font-bold tracking-tight	mb-5">Реєстрація</p>
            <div className=' bg-black h-px  mb-5 '></div>
            <div className="mb-3">
                <label htmlFor="email" className="text-sm font-light	tracking-tight text-gray-500">Ел. почта</label>
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
                <label htmlFor="password" className="text-sm font-light	tracking-tight text-gray-500">Придумайте пароль</label>
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

            <button type="submit" className="bg-amber-200 rounded-lg p-2 mx-12 my-5">Зареєструватися</button>
            <a href="#" className={classes.a}>Зареєструватись</a>
        </form>

    );
};


export default SignInForm;