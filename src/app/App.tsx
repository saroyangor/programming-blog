import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;