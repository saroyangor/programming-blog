import React from 'react';
import {Link} from 'react-router-dom';

import {AppRouter} from "@/app/providers/router";
import {classNames} from "@/shared/lib/classNames";

import {useTheme} from "./providers/ThemeProvider";

import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;