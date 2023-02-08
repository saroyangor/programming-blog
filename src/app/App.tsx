import React from 'react'
import {Link} from 'react-router-dom'

import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames"

import {useTheme} from "./providers/themeProvider"

import './styles/index.scss'

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter />
        </div>
    );
};

export default App;