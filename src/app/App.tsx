import React from 'react'

import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {classNames} from "shared/lib"

import {useTheme} from "./providers/themeProvider"

import './styles/index.scss'

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;