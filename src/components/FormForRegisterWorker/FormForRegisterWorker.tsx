import React, {useEffect, useState} from 'react';
import classes from "./FormForRegisterWorker.module.css";
import User from "../../img/pngwing.com.png";
import {useFormik} from 'formik';
import showImg from '../../img/show.png';
import hideImg from '../../img/hide.png';
import axios from 'axios';

const FormForRegisterWorker = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');


    useEffect(() => {
        // Замість 'YOUR_GEONAMES_USERNAME' вставте свій логін з Geonames
        const username = 'bondi1488';

        // Зробіть запит до API Geonames для отримання списку міст України
        axios.get(`http://api.geonames.org/searchJSON?country=UA&maxRows=1000&username=${username}`)
            .then(response => {
                // Отримайте дані про міста з відповіді
                const cityData = response.data.geonames;

                // Отримайте список міст з даних про міста
                const cityList = cityData.map((city: { name: string }) => city.name);

                // Встановіть список міст у стан компонента
                setCities(cityList);
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
            });
    }, []);

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
        <form action="">
            <div className='max-w-screen-lg mx-auto'>
                <p className='text-center text-4xl my-12'>Реєстрація Фахівця</p>
                <img src={User} alt="" className='w-44 h-44'/>
                <div className='flex  justify-between '>
                    <div>
                        <div className="mb-3 mt-3 flex items-center">
                            <label htmlFor="name"
                                   className="text-sm mr-2 font-light tracking-tight text-gray-500">Ім'я:</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="border p-2  w-2/6 rounded-lg"
                            />
                        </div>
                        <div className="mb-3 mt-3 flex items-center">
                            <label htmlFor="surname"
                                   className="text-sm mr-2 font-light tracking-tight text-gray-500">Прізвище:</label>
                            <input
                                id="surname"
                                name="surname"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.surname}
                                className="border p-2  w-2/6 rounded-lg"
                            />
                        </div>
                        <div className="mb-3 mt-3 flex items-center">
                            <label htmlFor="lastname" className="text-sm mr-2 font-light tracking-tight text-gray-500">По
                                батькові:</label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                className="border p-2  w-2/6 rounded-lg"
                            />
                        </div>


                        <div className="mb-3 relative flex items-center">
                            <label htmlFor="password" className="text-sm font-light	tracking-tight text-gray-500">Придумайте
                                пароль:</label>
                            <div className="">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="border p-2 w-full rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute left-80 top-0 p-2  rounded"
                                >
                                    <img
                                        src={showPassword ? hideImg : showImg}
                                        alt={showPassword ? "Hide" : "Show"}
                                        className="h-7 w-7"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="mb-3 relative flex items-center">
                            <label htmlFor="password" className="text-sm font-light	tracking-tight text-gray-500">Повторіть
                                пароль:</label>
                            <div className="">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="border p-2 w-full rounded-lg"
                                />

                            </div>
                        </div>
                        <div className="mb-3 mt-3 flex items-center">
                            <label htmlFor="email" className="text-sm mr-2 font-light tracking-tight text-gray-500">Ел.
                                почта:</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="border p-2  w-2/6 rounded-lg"
                            />
                        </div>
                        <div className="mb-3 mt-3 flex items-center">
                            <label htmlFor="phone" className="text-sm mr-2 font-light tracking-tight text-gray-500">Номер
                                телефону:</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                className="border p-2  w-2/6 rounded-lg"
                            />
                        </div>
                    </div>
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
                        <div>
                            <label htmlFor="city">Виберіть місто:</label>
                            <select
                                id="city"
                                name="city"
                                onChange={(e) => setSelectedCity(e.target.value)}
                                value={selectedCity}
                                className="border p-2 rounded-lg"
                            >
                                <option value="" disabled>Оберіть місто</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>


                    </div>
                </div>

            </div>
        </form>
    );
};

export default FormForRegisterWorker;