import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';

const Layout: FC = () => {

    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;