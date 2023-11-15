import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Providers from 'providers/';
import AuthForWorker from "./pages/AuthForWorker/AuthForWorker";
import {Main} from "./pages/Main/index";

function App() {
    return (
        <Providers>
            <Routes>
                <Route path="/" element={<AuthForWorker />} />
                <Route path="/auth-for-worker" element={<AuthForWorker />} />
            </Routes>
        </Providers>
    );
}

export default App;
