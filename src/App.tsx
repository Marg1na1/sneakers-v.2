import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmptyStatePage from './pages/EmptyStatePage/EmptyStatePage';
import Layout from './layout/Layout';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';

const App: FC = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='favorites' element={<Favorites />} />
                <Route path='orders' element={<Orders />} />
                <Route path='*' element={<EmptyStatePage />} />
            </Route>
        </Routes>
    );
}

export default App;
