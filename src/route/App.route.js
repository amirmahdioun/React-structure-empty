import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute, ProtectedRoute, PublicRoute} from "./components";


const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={} element={<PublicRoute component={} />} />
                <Route path={} element={<PrivateRoute component={} />} />
                <Route path={} element={<ProtectedRoute component={} />} />
            </Routes>
        </BrowserRouter>
    );
};

export {AppRoute};