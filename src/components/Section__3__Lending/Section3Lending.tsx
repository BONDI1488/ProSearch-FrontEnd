// import React from 'react';
// import Search from '../../img/search.png'
// const Section3Lending = () => {
//     return (
//         <section className='max-w-full bg-teal-200 h-64		'>
//             <div className='  text-center'>
//                 <p className='text-3xl font-light pt-14'>Не знайшли потрібну послугу? Використовуйте пошук!</p>
//                 <div className='pt-16 flex justify-center'>
//                     <input className='py-1 px-2 w-96 h-10 outline-none	rounded-s-lg' placeholder='Яку роботу потрібно зробити?' type="text" name="" id=""/>
//                     <button className='bg-amber-100 h-10 py-1 px-2 rounded-r-lg'><img
//                         className='h-8 w-8'
//                         src={Search} alt=""/></button>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default Section3Lending;

//
// import React from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import Search from '../../img/search.png';
//
// const Section3Lending = () => {
//     const formik = useFormik({
//         initialValues: {
//             searchQuery: '',
//         },
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.get(
//                     `https://prosearch-backend-01ffaf2c2114.herokuapp.com/workers/search?prompt=${encodeURIComponent(
//                         values.searchQuery
//                     )}`
//                 );
//
//                 formik.setFieldValue('searchQuery', '');
//
//                 if (response.data.length === 0) {
//                     formik.setStatus('Нічого не знайдено');
//                 } else {
//                     formik.setStatus(null);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 formik.setStatus('Помилка при отриманні даних');
//             }
//         },
//     });
//
//     return (
//         <section className='max-w-full bg-teal-200 h-64'>
//             <div className='text-center'>
//                 <p className='text-3xl font-light pt-14'>
//                     Не знайшли потрібну послугу? Використовуйте пошук!
//                 </p>
//                 <form onSubmit={formik.handleSubmit}>
//                     <div className='pt-16 flex justify-center'>
//                         <input
//                             className='py-1 px-2 w-96 h-10 outline-none rounded-s-lg'
//                             placeholder='Яку роботу потрібно зробити?'
//                             type='text'
//                             name='searchQuery'
//                             value={formik.values.searchQuery}
//                             onChange={formik.handleChange}
//                         />
//                         <button
//                             className='bg-amber-100 h-10 py-1 px-2 rounded-r-lg'
//                             type='submit'
//                         >
//                             <img className='h-8 w-8' src={Search} alt='' />
//                         </button>
//                     </div>
//                 </form>
//                 {formik.status && <p className='text-red-500'>{formik.status}</p>}
//             </div>
//         </section>
//     );
// };
//
// export default Section3Lending;

import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Search from '../../img/search.png';

const Section3Lending = () => {
    const formik = useFormik({
        initialValues: {
            searchQuery: '',
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.get(
                    `https://prosearch-backend-01ffaf2c2114.herokuapp.com/workers/search?prompt=${encodeURIComponent(
                        values.searchQuery
                    )}`
                );

                formik.setFieldValue('searchQuery', '');

                if (response.data.length === 0) {
                    formik.setStatus('Нічого не знайдено');
                } else {
                    formik.setStatus(null);
                    // Якщо є користувачі у відповіді, вивести перший нікнейм у консоль
                    if (response.data[0].name) {
                        console.log('Нікнейм користувача:', response.data[0].name);
                    }
                //     АХУЕТЬ ВОНО РОБИТЬ (ВРОДІ)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                formik.setStatus('Помилка при отриманні даних');
            }
        },
    });

    return (
        <section className='max-w-full bg-teal-200 h-64'>
            <div className='text-center'>
                <p className='text-3xl font-light pt-14'>
                    Не знайшли потрібну послугу? Використовуйте пошук!
                </p>
                <form onSubmit={formik.handleSubmit}>
                    <div className='pt-16 flex justify-center'>
                        <input
                            className='py-1 px-2 w-96 h-10 outline-none rounded-s-lg'
                            placeholder='Яку роботу потрібно зробити?'
                            type='text'
                            name='searchQuery'
                            value={formik.values.searchQuery}
                            onChange={formik.handleChange}
                        />
                        <button
                            className='bg-amber-100 h-10 py-1 px-2 rounded-r-lg'
                            type='submit'
                        >
                            <img className='h-8 w-8' src={Search} alt='' />
                        </button>
                    </div>
                </form>
                {formik.status && <p className='text-red-500'>{formik.status}</p>}
            </div>
        </section>
    );
};

export default Section3Lending;


