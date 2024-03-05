import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import UserForm from './UserForm';
import UserInfo from './Userinfo';
import ThemeToggle from './ThemeToggle';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>User Data</h1>
                <UserForm />
                <UserInfo />
                <ThemeToggle />
            </div>
        </Provider>
    );
};

export default App;