import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import { useGetFavoritesItemQuery } from './redux/sneakersAPI';

const App: FC = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='favorites' element={<Favorites />} />
                    <Route path='profile' element={<Orders />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
