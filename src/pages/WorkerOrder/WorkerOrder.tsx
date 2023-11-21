import React from 'react';
import Header from "../../components/Header/Header";
import OrderListForWorker from "../../components/OrderListForWorker/OrderListForWorker";

const WorkerOrder = () => {
    return (
        <div>
            <Header/>
            <OrderListForWorker/>
        </div>
    );
};

export default WorkerOrder;