import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar'
import ProductList from './components/Product/ProductList';
import ProductForm from './components/Product/ProductForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/new-product" component={ProductForm} />
          <Route exact path="/update/:id" component={ProductForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
