import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './modules/home/pages/HomePage';

const App = () => {
    const [, setWindowWidth] = useState<number>(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={'/home'} />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    );
};

export default App;
