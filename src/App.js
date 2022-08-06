import React from 'react';

import NavigationBar from './component/navigationBar';

import Home from './pages/home'
import About from './pages/about';
import Create from './pages/send/create';
import Update from './pages/send/update';
import Query from './pages/send/query';

const App = () => {
  let Content;
  switch (window.location.pathname) {
    case "/":
      Content = <Home />;
      break;
    case "/create-send":
      Content = <Create />;
      break;
    case "/update-send":
      Content = <Update />;
      break;
    case "/query-send":
      Content = <Query />;
      break;
    case "/about":
      Content = <About />;
      break;
    default:
      Content = <Home />;
  }
  return (
    <div>
      <NavigationBar />
      {Content}
    </div>
  )
}

export default App;