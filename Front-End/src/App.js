import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import catalog from './components/catalog';
import store from './store/index';
import "bootstrap/dist/css/bootstrap.min.css"
import buscador from './components/search'
import pagination from './components/pagination'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter >
          <Route path="/" component={buscador} />
          <Route path="/" component={catalog} />
          <Route path="/" component={pagination} />
        </BrowserRouter>
      </Provider>
    </div>
  );

}


export default App;
