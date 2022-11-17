import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmptyStatePage from './components/EmptyStatePage/EmptyStatePage';
import Layout from './layout/Layout';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';

const boredFace = './assets/img/bored_face.svg';

const App: FC = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='favorites' element={<Favorites />} />
                <Route path='orders' element={<Orders />} />
                <Route path='*' element={<EmptyStatePage
                    title={'Не найденно'}
                    message={'Не удалось найти данную страницу попробуйте позже'}
                    imgUrl={boredFace}
                />} />
            </Route>
        </Routes>
    );
}

export default App;
