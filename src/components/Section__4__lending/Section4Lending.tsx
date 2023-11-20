import React from 'react';
import Coment from "./DopComponent/Coment";
import Face1 from './DopComponent/img_peopleForComments/sex.jpg'
import Face2 from './DopComponent/img_peopleForComments/skin-tone.jpg'
import Face3 from './DopComponent/img_peopleForComments/images.jpeg'
import Face4 from './DopComponent/img_peopleForComments/images (1).jpeg'
import Face5 from './DopComponent/img_peopleForComments/indsbidh39la1.jpg'
import Slider from "react-slick";

const Section4Lending = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (
        <section className='max-w-full'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex justify-between relative'>
                    <p className='my-7 text-3xl'>Останні відгуки</p>
                </div>

                <Slider {...settings}>
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
                    <Coment
                        name='Мурат Максим Олегович'
                        photo={Face1}
                        text="Майстер просто клас XD"
                        namePeople='Олександр Б.'
                    />
                </Slider>
            </div>

        </section>
    );
};

export default Section4Lending;





