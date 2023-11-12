import React from 'react';
import classes from "./Section4Lending.module.css";
import Star5 from "./DopComponent/Star5";
import Arrow from '../../img/arrow.png'
import Coment from "./DopComponent/Coment";
import Face1 from './DopComponent/img_peopleForComments/sex.jpg'
import Face2 from './DopComponent/img_peopleForComments/skin-tone.jpg'
import Face3 from './DopComponent/img_peopleForComments/images.jpeg'
import Face4 from './DopComponent/img_peopleForComments/images (1).jpeg'
import Face5 from './DopComponent/img_peopleForComments/indsbidh39la1.jpg'
const Section4Lending = () => {
    return (
        <section className='max-w-full'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex justify-between	'>
                    <p className='my-7 text-3xl'>Останні відгуки</p>
                    <div className="flex justify-center items-center space-x-4">
                        <button className="w-12 h-12 rounded-full bg-amber-200	 flex justify-center items-center">
                            <img src={Arrow} alt="right arrow" className="w-6 h-6 transform rotate-180" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-amber-200	 flex justify-center items-center">
                            <img src={Arrow} alt="left arrow" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            {/*--------------------*/}
                <div className='flex justify-between mt-5'>
                    <Coment
                        name='Мурат Максим Олегович'
                        photo={Face1}
                        text="Майстер просто клас XD"
                        namePeople='Олександр Б.'
                    />
                    <Coment
                        name='Венгер Анатолій Іванович'
                        photo={Face4}
                        text="Поремонтував кран за декілька хвилин, мій герой"
                        namePeople='Олексій М.'
                    />
                    <Coment
                        name='Швець Владислав Вікторович'
                        photo={Face3}
                        text="Ставив мені проводку, зробив все гарно, після себе прибрав"
                        namePeople='Артем С.'
                    />

                </div>
            </div>

        </section>
    );
};

export default Section4Lending;





