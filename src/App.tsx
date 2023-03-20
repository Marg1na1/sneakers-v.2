import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { EmptyStatePage } from './pages/EmptyStatePage';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { Orders } from './pages/Orders';

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
