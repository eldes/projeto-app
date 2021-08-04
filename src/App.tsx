import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Contato from './pages/contato'
import Home from './pages/home'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contato" exact component={Contato} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
