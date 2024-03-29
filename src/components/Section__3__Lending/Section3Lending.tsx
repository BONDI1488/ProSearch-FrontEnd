import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Search from '../../img/search.png';

interface Worker {
    id: number;
    name: string;
    // Додайте інші властивості, якщо потрібно
}

const Section3Lending: React.FC = () => {
    const [suggestions, setSuggestions] = useState<Worker[]>([]);
    const [isDisply, togleDispleyDrop] = useState(false);
    const formik = useFormik({
        initialValues: {
            searchQuery: '',
        },
        onSubmit: async (values) => {
           togleDispleyDrop(!isDisply);
            try {
                const response = await axios.get<Worker[]>(
                    `https://prosearch-backend-01ffaf2c2114.herokuapp.com/workers/search?prompt=${encodeURIComponent(
                        values.searchQuery
                    )}`
                );

                formik.setFieldValue('searchQuery', '');
                setSuggestions(response?.data || []);

            } catch (error) {
                console.error('Error fetching data:', error);

            }
        },
    });

    const handleSelectSuggestion = (suggestion: Worker) => {
        formik.setFieldValue('searchQuery', suggestion.name);
        setSuggestions([]);

        if (formik.values.searchQuery === suggestion.name) {
            console.log('Введено ім\'я, яке не збігається з підказкою.');
        } else {
            console.log('Вірне ім\'я:', suggestion.name);
        }
    };

    return (
        <section className='max-w-full bg-teal-200 h-64'>
            <div className='text-center'>
                <p className='text-3xl font-light pt-14'>
                    Не знайшли потрібну послугу? Використовуйте пошук!
                </p>
                <div className="pt-16 flex justify-center">
                    <div className='relative'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex justify-center">
                                <input
                                    className='py-1 px-2 w-96 h-10 outline-none rounded-s-lg'
                                    placeholder='Яку роботу потрібно зробити?'
                                    type='text'
                                    name='searchQuery'
                                    value={formik.values.searchQuery}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        formik.setFieldTouched('searchQuery', true, false);
                                        setSuggestions([]);
                                    }}
                                />
                                <button
                                    className='bg-amber-100 h-10 py-1 px-2 rounded-r-lg'
                                    type='submit'
                                >
                                    <img className='h-8 w-8' src={Search} alt='' />
                                </button>
                            </div>
                        </form>
                        {isDisply &&
                        <div className='absolute top-[45px] left-0 bg-gray-100 z-10 border border-gray-300 rounded-lg w-[100%]'>
                        {(suggestions.length > 0 && suggestions.length !== 0) ? (
                            <ul >
                                {suggestions.map((suggestion) => (
                                    <li
                                        key={suggestion.id}
                                        className='cursor-pointer p-2 hover:bg-gray-200'
                                        onClick={() => handleSelectSuggestion(suggestion)}
                                    >
                                        {suggestion.name}
                                    </li>
                                ))}
                            </ul>
                        ):   <p className='py-2 '>Такого працівника незнайдений</p> }
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3Lending;


