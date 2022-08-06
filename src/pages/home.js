import React from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from './component/navigationBar';
import SendsList from './component/sendsList';

const Home = () => (
     <div className='main-page'>
    <header><NavigationBar /></header>
    <main><SendsList /></main>
    <footer></footer>
  </div>
);

export default Home;