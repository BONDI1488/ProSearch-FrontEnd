import React from 'react';
import Star5 from "./Star5";


interface ComentProps {
    photo: string;
    name: string;
    text: string;
    namePeople: string;
}

const Coment: React.FC<ComentProps> = ({name, photo, text, namePeople}) => {
    return (
        <div className=' bg-gray-200 h-64 w-[400px] rounded-xl'>
            <div className='flex items-center p-4'>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                        className="w-20 h-20 object-cover"
                        src={photo}
                        alt=""
                    />
                </div>
                <div className='ml-3'>
                    <p className='text-lg'>{name}</p>
                    <Star5/>
                </div>
            </div>
            <div className='bg-gray-300 h-32 w-11/12 mx-auto rounded-lg relative'>
                <p className='p-3 text-lg text-gray-600	'>{text}</p>
                <p className='absolute bottom-0 right-0 p-3 text-gray-700 text-sm'>{namePeople}</p>
            </div>
        </div>
    );
};

export default Coment;