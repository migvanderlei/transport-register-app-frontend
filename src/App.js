import React from 'react';

import NavigationBar from './components/NavigationBar';

import Home from './pages/Home'
import About from './pages/About';
import CreateSend from './pages/send/CreateSend';
import UpdateSend from './pages/send/UpdateSend';
import QuerySend from './pages/send/QuerySend';
import QueryResultSend from './pages/send/QueryResultSend';

const App = () => {
  let Content;
  switch (window.location.pathname) {
    case "/":
      Content = <Home />;
      break;
    case "/create-send":
      Content = <CreateSend />;
      break;
    case "/update-send":
      Content = <UpdateSend />;
      break;
    case "/query-send":
      Content = <QuerySend />;
      break;
    case "/about":
      Content = <About />;
      break;
    case "/query-result":
      Content = <QueryResultSend/>;
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