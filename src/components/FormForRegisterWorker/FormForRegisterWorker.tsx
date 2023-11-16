import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./FormForRegisterWorker.module.css";
import User from "../../img/pngwing.com.png";
import {useFormik} from 'formik';
import showImg from '../../img/show.png';
import hideImg from '../../img/hide.png';
import axios from 'axios';
import CitiesData from "./CitiesData/CitiesData";

const FormForRegisterWorker = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    // Обробник зміни значення інпуту
    const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {

        setSelectedCity(event.target.value);
    };


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            photo: "1",
            name: "",
            surname: "",
            lastname: "",
            phone: "",
            birthday: "", //дату в базу тільки таким форматом (11.11.1111)
            gender: "",
            city: "",
            description: "",
            rating: "0"

        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("https://prosearch-backend-01ffaf2c2114.herokuapp.com/auth/registration", values);
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <form action="" className='pb-9'>

            <div className='max-w-screen-lg mx-auto'>
                <p className='text-center text-4xl my-12'>Реєстрація Фахівця</p>
                <img src={User} alt="" className='w-44 h-44'/>
                <div className='flex  justify-between '>
                    <div className='w-6/12'>

                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="text-sm mb-2 font-light tracking-tight text-gray-500">
                                Ім'я:
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="border w-80 p-2  rounded-lg mb-2"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="surname" className="text-sm mb-2 font-light tracking-tight text-gray-500">
                                Прізвище:
                            </label>
                            <input
                                id="surname"
                                name="surname"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.surname}
                                className="border p-2 w-80 rounded-lg mb-2"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="lastname" className="text-sm mb-2 font-light tracking-tight text-gray-500">
                                По батькові:
                            </label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                className="border p-2 w-80 rounded-lg mb-2"
                            />
                        </div>


                        <div className="mb-2 flex justify-between items-center">
                            <label htmlFor="password" className="text-sm  mr-2 font-light	tracking-tight text-gray-500">Пароль:</label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="relative left-[360px] p-0 z-10 rounded"
                            >
                                <img
                                    src={showPassword ? hideImg : showImg}
                                    alt={showPassword ? "Hide" : "Show"}
                                    className="h-7 w-7"
                                />
                            </button>
                            <div className="">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="border p-2 w-80 rounded-lg"
                                />
                            </div>

                        </div>
                        <div className="mb-2 flex justify-between items-center">
                            <label htmlFor="password" className="text-sm  mr-2 font-light	tracking-tight text-gray-500">Повторіть
                                пароль:</label>
                            <div className="">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="border p-2 w-80 rounded-lg"
                                />

                            </div>
                        </div>
                        <div className="mb-2 flex justify-between items-center">
                            <label htmlFor="birthday" className="text-sm mr-2   font-light tracking-tight text-gray-500">Дата народження:</label>
                            <input
                                id="birthday"
                                name="birthday"
                                type="birthday"
                                onChange={formik.handleChange}
                                value={formik.values.birthday}
                                className="border p-2 w-80 rounded-lg"
                            />
                        </div>
                        <div className="mb-2 flex justify-between items-center">
                            <label htmlFor="email" className="text-sm mr-2 font-light tracking-tight text-gray-500">Ел.
                                почта:</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="border p-2  w-80 rounded-lg"
                            />
                        </div>
                        <div className="mb-2 flex justify-between items-center">
                            <label htmlFor="phone" className="text-sm mr-2 font-light tracking-tight text-gray-500">Номер
                                телефону:</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                className="border p-2 w-80 rounded-lg"
                            />
                        </div>
                    </div>
                    {/*----------------------------------------------------------------------------*/}
                    <div>
                        <div className="mb-3 mt-3 flex items-center">
                            <label className="text-sm mr-2 font-light tracking-tight text-gray-500">Стать:</label>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formik.values.gender === "male"}
                                    onChange={formik.handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="male" className="mr-4">Чоловік</label>

                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={formik.values.gender === "female"}
                                    onChange={formik.handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="female">Жінка</label>
                            </div>
                        </div>

                        <div className="mb-3 mt-3 flex items-center">
                            <label className="text-sm mr-2 font-light tracking-tight text-gray-500">Виберіть місто:</label>
                            <select
                                value={selectedCity}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md"
                            >
                                {CitiesData.map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 mt-3 flex flex-col">
                            <label htmlFor="description" className="text-sm mb-2 font-light tracking-tight text-gray-500">Про себе:</label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className="border p-2 w-96 h-40 rounded-lg resize-none"
                                placeholder="Наприклад: освіту, де процювали, що вмієте"
                            />
                        </div>

                        <div className=" mt-8 text-center">
                            <button type="submit" className="bg-amber-200 px-8 py-3 rounded text-2xl border border-black">
                                Надіслати анкету
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </form>
    );
};

export default FormForRegisterWorker;