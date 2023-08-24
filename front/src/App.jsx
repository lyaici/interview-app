import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import history from "./history";
import { store } from "./redux";
import { Header } from "./components/Header";
import List from "./pages/list";
import LazyBeerForm from "./pages/form";

import "./App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router history={history}>
            <div className="App">
              <header className="App-header">
                <Header />
              </header>
              <div className="App-content">
                <Route path="/" exact component={List} />
                <Route path="/new/" component={LazyBeerForm} />
              </div>
            </div>
          </Router>
        </Provider>
      </QueryClientProvider>
    );
  }
}

export default App;
