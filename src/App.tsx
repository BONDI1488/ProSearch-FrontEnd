import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Providers from 'providers/';
import AuthForWorker from "./pages/AuthForWorker/AuthForWorker";
import {Main} from "./pages/Main/index";
import CreateOrder from "./pages/CreateOrder/CreateOrder";

function App() {
    return (
        <Providers>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/order-form" element={<CreateOrder />} />
                <Route path="/auth-for-worker" element={<AuthForWorker />} />
            </Routes>
        </Providers>
    );
}

export default App;
