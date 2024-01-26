import React from 'react';
import checkmark from "../../img/checkmark.png"
const PublishedSuccessfully = () => {
    return (
        <div className='w-[500px] h-[300px] bg-teal-200 rounded-xl border-solid border-2 border-black'>
            <p className='text-center text-4xl pt-16'>Успішно опубліковано</p>
            <div className='flex justify-center mt-5'>
                <img src={checkmark} className='w-36 h-36 ' alt=""/>
            </div>
        </div>
    );
};

export default PublishedSuccessfully;