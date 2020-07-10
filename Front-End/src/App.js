import React from 'react';
import Catalog from './components/catalog/catalog';
import {Provider} from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import store from './store/store';
import './App.css';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter >
                 <Route  path="/" component = {Catalog} />
              </BrowserRouter>
        </Provider>
      </div>
        );
}

export default App;
