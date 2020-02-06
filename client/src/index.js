import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import Routes from './routes';


const store = configureStore();


ReactDOM.render(
 <Provider store={store}>
 <BrowserRouter>
  <Routes/>
 </BrowserRouter>
</Provider>
, document.getElementById('root'));

