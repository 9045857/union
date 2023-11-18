import { AuthContext } from '../../hooks/authorization/AuthContext';
import { useContext } from 'react';

import { WideHeader } from './WideHeader';
import { NarrowHeader } from './NarrowHeader';

function Header() {
    const { isLoggedIn, logIn, logOut } = useContext(AuthContext);
    return (
        <>
            {isLoggedIn ? <NarrowHeader /> : <WideHeader />}
            <button onClick={isLoggedIn ? logOut : logIn}>
                В системе: {isLoggedIn ? 'да' : 'нет'}
            </button>
        </>
    );
}

export { Header };
