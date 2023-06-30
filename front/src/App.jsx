import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Router, Route } from 'react-router-dom'
import history from './history'
import Header from './components/Header/Header.component'
import List from './pages/list/List'
import LazyBeerForm from './pages/form/LazyBeerForm'

import './App.scss'

// create a client
const queryClient = new QueryClient()

// Since there is no state or any class-based functionnality, we can use a function component.
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    )
}
