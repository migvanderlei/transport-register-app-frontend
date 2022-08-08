import React from 'react';

import ListSend from '../components/send/ListSend';

import '../css/style.css';

const Home = () => (
  <div className='container-page'>
    <h3 className='title-home'> Lista de envios</h3>
    <ListSend />
  </div>
);

export default Home;