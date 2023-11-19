import React, {ChangeEvent, useState} from 'react';
import {useFormik} from "formik";
import axios from "axios";
import CitiesData from "../FormForRegisterWorker/CitiesData/CitiesData";


const CreateOrderForm = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            case: '', // Що потрібно зробити (коротко)?
            detailsСase: '', //Детально опишіть ваше замовлення
            category: '',//Детально опишіть ваше замовлення
            city: '',
            address: '',
            date: '',
            price: ''

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
        <form className='mt-7'>
            <div className='max-w-screen-xl	 mx-auto'>
                <p className='text-center text-3xl'>Створення замовлення</p>
                <div className='mt-5 w-6/12'>
                    <p className='text-2xl mb-4'>Деталі замовлення</p>
                    <div className="flex  items-center">
                        <label htmlFor="case" className="text-sm mb-2 font-light tracking-tight text-gray-500">
                            Що потрібно зробити <br/> (коротко)?
                        </label>
                        <input
                            id="case"
                            name="case"
                            type="text"
                            placeholder='Приклад: Ремонт крану'
                            onChange={formik.handleChange}
                            value={formik.values.case}
                            className="border w-80 p-2 ml-[120px] rounded-lg mb-2"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="detailsСase" className="text-sm mb-2 font-light tracking-tight text-gray-500">Детально
                            опишіть ваше <br/> замовлення
                        </label>
                        <textarea
                            id="detailsСase"
                            name="detailsСase"
                            onChange={formik.handleChange}
                            value={formik.values.detailsСase}
                            className="border p-2 w-96 h-40 rounded-lg resize-none"
                            placeholder="Потрібно вказати: Що це за кран, особливості роботи, причину поломки і інформацію яка допоможе майстру швидко та якісно зробити ремонт"
                        />
                    </div>

                    <div className="flex mt-2   items-center">
                        <label htmlFor="category" className="text-sm mb-2 font-light tracking-tight text-gray-500">
                            Оберіть категорію <br/> замовлення
                        </label>
                        <select
                            id="category"
                            name="category"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                            className="border p-2 ml-[140px] h-[40px] rounded-lg mb-2"
                        >
                            <option value="plumber">Сантехнік</option>
                            <option value="electrician">Електрик</option>
                            <option value="joiner">Столяр</option>
                            <option value="garden">Сад і город</option>
                            <option value="nanny">Няні</option>
                            <option value="housekeeper">Послуги домробітниці</option>
                            <option value="handyman">Різноробочі</option>
                            <option value="сoncreteWorks">Бетонні роботи</option>
                            <option value="boring">Бурові роботи</option>
                            <option value="other">Інше</option>
                        </select>
                    </div>

                </div>
                <hr className='my-4'/>
                <p className='text-2xl mb-4 '>Адреса виконання замовлення</p>
                <div className='w-4/12'>

                    <div className="mb-3 mt-3 flex justify-between items-center">
                        <label className="text-sm mr-2 font-light tracking-tight text-gray-500">Місто:</label>
                        <select
                            value={selectedCity}
                            onChange={handleInputChange}
                            className="border p-2 w-80 h-[40px] rounded-md"
                        >
                            {CitiesData.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="category" className="text-sm mb-2 font-light tracking-tight text-gray-500">
                            Адреса: </label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                            className="border w-80 p-2  rounded-lg mb-2"
                        />
                    </div>
                </div>
                <hr className='my-4'/>
                <div className='flex'>
                    <div>
                        <p className='text-2xl mb-4'>Дата виконання замовлення</p>
                        <div>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                onChange={formik.handleChange}
                                value={formik.values.date}
                                className="border p-2 w-40 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className='ml-32'>
                        <p className='text-2xl mb-4'>Оплата роботи</p>
                        <div className='flex items-center'>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                className="border p-2 w-24 rounded-lg"
                            />
                            <p className='ml-2'>Грн.</p>
                        </div>
                    </div>
                </div>
                <hr className='my-4'/>

                <div className='w-full flex justify-center'>
                    <button type="submit"
                            className="bg-amber-200 px-8 mt-7 py-3 text-center  rounded text-2xl border border-black">
                        Опублікувати
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateOrderForm;