import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { initClient } from './lib/initQuery';

import history from "./history";
import { store } from "./redux";
import { Header } from "./components/Header";
import List from "./pages/list";
import LazyBeerForm from "./pages/form";

import "./App.scss";

const client = initClient();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={history}>
          <QueryClientProvider client={client}>
              <div className="App">
                  <header className="App-header">
                    <Header />
                  </header>
                  <div className="App-content">
                    <Route path="/" exact component={List} />
                    <Route path="/new/" component={LazyBeerForm} />
                  </div>
              </div>
              <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </Router>
        </Provider>
    );
  }
}

export default App;
