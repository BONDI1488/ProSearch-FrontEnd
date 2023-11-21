import React, { useContext, useState }  from 'react';
import { useFormik } from 'formik';
import showImg from '../../img/show.png';
import hideImg from '../../img/hide.png';
import classes from "./SignUpForm.module.css";
import axios from 'axios';
import { InterfaceContext } from 'context';

const SignUpForm = () => {
    const { toggleDisplayHeaderModalFun, toggleSingupFormDisplayFun } = useContext(InterfaceContext)
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            photo: "1",
            name: '',
            surname: '',
            phone: '',
            role:'user'

        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/registration`, values);
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (

        <form onSubmit={formik.handleSubmit} className='flex flex-col max-w-sm	 mx-auto w-370 h-547 bg-gray-100 rounded-xl p-6 absolute z-10 right-20 drop-shadow-lg'>
           <div className='flex'>
            <p className="text-3xl font-bold tracking-tight	mb-5">Реєстрація</p>
               <button  onClick={toggleDisplayHeaderModalFun} className={classes.closeButton}>
                   &times;
               </button>
           </div>
            <div className=' bg-black h-px  mb-5 '></div>
            <div className="mb-3">
                <label htmlFor="name" className="text-sm font-light tracking-tight text-gray-500">Ім'я</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="border p-2  w-full  rounded-lg "
                />
            </div>

            <div className="mb-3">
                <label htmlFor="surname" className="text-sm font-light	tracking-tight text-gray-500">Прізвище</label>
                <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                    className="border p-2  w-full rounded-lg"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="text-sm font-light	tracking-tight text-gray-500">Номер телефону</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="border p-2  w-full rounded-lg"
                />
            </div>

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
            <button onClick={toggleSingupFormDisplayFun} className={classes.a}>Я вже зареєстрований</button>
        </form>

    );
};

export default SignUpForm;
