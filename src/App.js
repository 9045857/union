//в данном примере работаем с 5-ой версией react-router-dom
// для ее установки нужно использовать строку: npm install react-router-dom@5

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/index';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home/Home';
import { Meal } from './pages/Meal';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CategoryList } from './pages/CategoryList';
import { AreaList } from './pages/AreaList';
import { IngredientList } from './pages/IngredientList';
import { Meals } from './pages/Meals';

import { ContextProvider } from './hooks/context';
import { AuthProvider } from './hooks/authorization/AuthContext';

import { RegistrationPage } from './pages/Registration/RegistrationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { UserProfile } from './pages/UserProfile/UserProfile';

import './components.css';

function App() {
    return (
        <>
            <Router basename='/chemical-union'>
                <Provider store={store}>
                    <AuthProvider>
                        <ContextProvider>
                            <Header />
                            <main className='container content'>
                                <Switch>
                                    <Route
                                        exact //exect имеет отношение к path. Значит строгий адрес, в противном случае он будет рисоваться везде, где есть /, т.е. в каждом блоке ниже
                                        path='/'
                                        component={Home}
                                    />
                                    <Route
                                        path='/category/:category'
                                        component={Meals}
                                    />
                                    <Route
                                        path='/area/:area'
                                        component={Meals}
                                    />
                                    <Route
                                        path='/ingredient/:ingredient'
                                        component={Meals}
                                    />

                                    <Route
                                        path='/about'
                                        component={About}
                                    />
                                    <Route
                                        path='/categories'
                                        component={CategoryList}
                                    />
                                    <Route
                                        path='/areas'
                                        component={AreaList}
                                    />
                                    <Route
                                        path='/ingredients/:number'
                                        component={IngredientList}
                                    />
                                    <Route
                                        path='/contact'
                                        component={Contact}
                                    />
                                    <Route
                                        path='/meal/:id'
                                        component={Meal}
                                    />
                                    <Route
                                        path='/join'
                                        component={RegistrationPage}
                                    />
                                    <Route
                                        path='/login'
                                        component={LoginPage}
                                    />
                                    <Route
                                        path='/user-profile'
                                        component={UserProfile}
                                    />
                                    <Route
                                        component={NotFound} //блок без path - нарисуется при вводе любого другого адреса, чем выше
                                    />
                                </Switch>
                            </main>
                        </ContextProvider>
                    </AuthProvider>
                    <Footer />
                </Provider>
            </Router>
        </>
    );
}

export default App;
