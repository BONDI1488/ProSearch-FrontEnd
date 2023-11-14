import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages'
import Providers from 'providers/';
import AuthForWorker from "./pages/AuthForWorker/AuthForWorker";
import TestPage from "./pages/TestPage/TestPage";
function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </Providers>
  );
}

export default App;
