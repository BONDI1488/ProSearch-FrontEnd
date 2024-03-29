import React from 'react';
import Header from "../../components/Header/Header";
import FormForRegisterWorker from "../../components/FormForRegisterWorker/FormForRegisterWorker";
import Footer from "../../components/Footer/Footer";
import CreateOrderForm from "../../components/CreateOrderForm/CreateOrderForm";

const CreateOrder = () => {
    return (
        <div className='max-w-full'>
            <Header />
            <CreateOrderForm/>
            <div className='absolute -bottom-8 w-full'>
                <Footer/>
            </div>
        </div>
    );
};

export default CreateOrder;