import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {MainPageAsync} from "@/pages/MainPage/MainPage.async";
import {AboutPageAsync} from "@/pages/AboutPage/AboutPage.async";

import './index.scss';

const App = () => {
  return (
    <div className='app'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync/>}/>
          <Route path='/about' element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;